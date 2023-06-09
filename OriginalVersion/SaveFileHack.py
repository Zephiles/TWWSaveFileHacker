#!/usr/bin/python3
from datetime import datetime
import binascii
import sys
import os

# Script created by Zephiles

# stringToInt taken from text_to_bits from here:
# https://stackoverflow.com/questions/7396849/convert-binary-to-ascii-and-vice-versa
def stringToInt(string, encoding="utf-8", errors="surrogatepass"):
	bits = bin(int(binascii.hexlify(string.encode(encoding, errors)), 16))[2:]
	return int(bits.zfill(8 * ((len(bits) + 7) // 8)), 2)

# Make sure something was passed in
if len(sys.argv) < 2:
	input("You must pass in a proper TWW gci file. Press Enter to close this window.")
	sys.exit("")

# Make sure what was passed in is a gci file
FileName = sys.argv[1]
if not FileName.endswith(".gci"):
	input("You must pass in a proper TWW gci file. Press Enter to close this window.")
	sys.exit("")

# Check if the file number was passed in
FileNumberString = ""
if len(sys.argv) < 3:
	
	# Prompt for the file number to use
	while (FileNumberString == ""):
		FileNumberString = input("Enter the number of the file to hack (1-3): ")
		
		# Make sure the input is valid
		if (not FileNumberString.isdigit()) or (int(FileNumberString) < 1) or (int(FileNumberString) > 3):
			FileNumberString = ""
else:
	FileNumberString = sys.argv[2]
	
	# Make sure the input is valid
	if (not FileNumberString.isdigit()) or (int(FileNumberString) < 1) or (int(FileNumberString) > 3):
		FileNumberString = ""
		
		# Prompt for the file number to use
		while (FileNumberString == ""):
			FileNumberString = input("Enter the number of the file to hack (1-3): ")
			
			# Make sure the input is valid
			if (not FileNumberString.isdigit()) or (int(FileNumberString) < 1) or (int(FileNumberString) > 3):
				FileNumberString = ""

# Convert the file number string to a proper number
FileNumber = int(FileNumberString)

# Open the gci file
f = open(FileName, "r+b")

# Get the game id
GameId = int.from_bytes(f.read(6), byteorder="big", signed=False)

# Set up the values for the three retail game ids
ID_JP = stringToInt("GZLJ01")
ID_US = stringToInt("GZLE01")
ID_EU = stringToInt("GZLP01")

# Make sure the gci file opened is valid
if (GameId != ID_JP) and (GameId != ID_US) and (GameId != ID_EU):
	f.close()
	input("You must pass in a proper TWW gci file. Press Enter to close this window.")
	sys.exit("")

# Get the internal filename
f.seek(0x8, 0)
InternalName = int.from_bytes(f.read(8), byteorder="big", signed=False)

# Make sure the internal filename of the gci file opened is valid
ProperInternalName = stringToInt("gczelda\0")

if InternalName != ProperInternalName:
	f.close()
	input("You must pass in a proper TWW gci file. Press Enter to close this window.")
	sys.exit("")

# Get the offset to the currently-selected file
OffsetFirstFile = ((FileNumber - 1) * 0x770) + 0x2048

# Get the offset to the currently-selected file's duplicate
OffsetSecondFile = OffsetFirstFile + 0x2000

# Write the new file name
FileNameString = "REL Loader\0"
f.seek(OffsetFirstFile + 0x157, 0)
f.write(stringToInt(FileNameString).to_bytes(len(FileNameString), byteorder="big", signed=False))
f.seek(OffsetSecondFile + 0x157, 0)
f.write(stringToInt(FileNameString).to_bytes(len(FileNameString), byteorder="big", signed=False))

# Overwrite the next stage string with a bunch of filler 3s
f.seek(OffsetFirstFile + 0x30, 0)
for i in range(0, 0x10):
	f.write((0x33).to_bytes(1, byteorder="big", signed=False))

# Get the address for g_dComIfG_gameInfo
g_dComIfG_gameInfo_Address = 0
if GameId == ID_JP:
	g_dComIfG_gameInfo_Address = 0x803B8108
elif GameId == ID_US:
	g_dComIfG_gameInfo_Address = 0x803C4C08
else:
	g_dComIfG_gameInfo_Address = 0x803CC530

# Write the pointer to the pointer to the init asm function
InitAsmFuncPtrPtr = g_dComIfG_gameInfo_Address + 0x200 - 0xB0

f.seek(OffsetFirstFile + 0x40, 0)
f.write(InitAsmFuncPtrPtr.to_bytes(4, byteorder="big", signed=False))
f.seek(OffsetSecondFile + 0x40, 0)
f.write(InitAsmFuncPtrPtr.to_bytes(4, byteorder="big", signed=False))

# Write the pointer to the init asm function
InitAsmFuncPtr = g_dComIfG_gameInfo_Address + 0x204

f.seek(OffsetFirstFile + 0x1F8, 0)
f.write(InitAsmFuncPtr.to_bytes(4, byteorder="big", signed=False))
f.seek(OffsetSecondFile + 0x1F8, 0)
f.write(InitAsmFuncPtr.to_bytes(4, byteorder="big", signed=False))

# Write the init asm function
VersionText = ""
if GameId == ID_JP:
	VersionText = "JP"
elif GameId == ID_US:
	VersionText = "US"
else:
	VersionText = "EU"

# Open the file containing the init asm function
g = open("bin/Init_" + VersionText + ".bin", "rb")

# Perform the write
Func = g.read()

f.seek(OffsetFirstFile + 0x1FC, 0)
for b in Func:
	f.write(b.to_bytes(1, byteorder="big", signed=False))

f.seek(OffsetSecondFile + 0x1FC, 0)
for b in Func:
	f.write(b.to_bytes(1, byteorder="big", signed=False))
g.close()

# Write the main asm function
# Get the size of the init asm function, as the main asm function will be written directly after it
InitAsmFuncSize = os.path.getsize("bin/Init_" + VersionText + ".bin")

# Open the file containing the main asm function
g = open("bin/Main_" + VersionText + ".bin", "rb")

# Perform the write
Func = g.read()

f.seek(OffsetFirstFile + 0x1FC + InitAsmFuncSize, 0)
for b in Func:
	f.write(b.to_bytes(1, byteorder="big", signed=False))

f.seek(OffsetSecondFile + 0x1FC + InitAsmFuncSize, 0)
for b in Func:
	f.write(b.to_bytes(1, byteorder="big", signed=False))
g.close()

# Update the last saved time to the current time, as a form of build date
OSBusClock = 162000000
ticks = int((datetime.utcnow() - datetime(2000, 1, 1)).total_seconds() * (OSBusClock / 4))
f.seek(OffsetFirstFile + 0x18, 0)
f.write(ticks.to_bytes(8, byteorder="big", signed=True))
f.seek(OffsetSecondFile + 0x18, 0)
f.write(ticks.to_bytes(8, byteorder="big", signed=True))

# Get the sum of the bytes for the data field
DataFieldSum = 0
DataFieldSize = 0x768
f.seek(OffsetFirstFile, 0)

DataField = f.read(DataFieldSize)
for b in DataField:
	DataFieldSum += b

# Set the checksum of the bytes for the data field
f.seek(OffsetFirstFile + 0x768, 0)
f.write(DataFieldSum.to_bytes(4, byteorder="big", signed=False))
f.seek(OffsetSecondFile + 0x768, 0)
f.write(DataFieldSum.to_bytes(4, byteorder="big", signed=False))

# Set the inverted checksum of the bytes for the data field
f.seek(OffsetFirstFile + 0x76C, 0)
f.write((-(DataFieldSum + DataFieldSize)).to_bytes(4, byteorder="big", signed=True))
f.seek(OffsetSecondFile + 0x76C, 0)
f.write((-(DataFieldSum + DataFieldSize)).to_bytes(4, byteorder="big", signed=True))

f.close()
