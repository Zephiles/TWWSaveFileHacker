var _a, _b;
function readString(buffer, offs, length) {
    var u = new Uint8Array(buffer);
    var S = '';
    for (var i = 0; i < length; i++)
        S += String.fromCharCode(u[offs + i]);
    return S;
}
function writeBytes(buffer, offs, S) {
    new Uint8Array(buffer).set(new Uint8Array(S), offs);
}
function makeStrBytes(S) {
    var u = new Uint8Array(S.length);
    for (var i = 0; i < S.length; i++)
        u[i] = S.charCodeAt(i);
    return u.buffer;
}
var BinaryDataInit = (_a = {},
    _a["GZLJ01" /* JP */] = "PICAPIiEk5gchAdwOIQCIDyggDpgpW6gfYUiFH2JA6ZOgAQg",
    _a["GZLP01" /* EU */] = "PICAPYiE18AchAdwOIQCIDyggDtgpaagfYUiFH2JA6ZOgAQg",
    _a["GZLE01" /* US */] = "PICAPIiEXpgchAdwOIQCIDyggDtgpTmgfYUiFH2JA6ZOgAQg",
    _a);
var BinaryDataMain = (_b = {},
    _b["GZLJ01" /* JP */] = "PYCAMGGMI3B9iAOmToAAITxggDBgY0GUSAAABXyIAqY4hAA4SAABQT2AgDBhjA0UfYkDpk6ABCE4YAAAPICAADigAAA9gIABYYx6RH2JA6ZOgAQglCH/4HwIAqaQAQAkv6EACHx+G3h8nyN4P6CAsH+j63hIAAAFfIgCpjiE/4g4oAPwPYCAMmGMj0x9iAOmToAAIX+j63g4gAPwSAAA4ZOtmIw4fQPwkG2YiDxggDBgY0F4Y6QA5EgAAK09gIAwYYxBmH2JA6Z/w/N4f+T7eLuhAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYwUsPICAsGCEAQRIAABtf+P7eEuAQHx8fxt4fJ4jeHy9K3g/gIAAY4NMaDyAgLA4oAPwS4KOLWODTGg4gAPwSAAAUTxggABgY2QIY4RONEgAACk8YIAwYGNBlDyAgABghEy8SAAAFX/j+3h/xPN4f6XreEiAA9B8gyBQVIQBujygSAB8pSN4kKMAADiAAASUIf/gfAgCppABACS/oQAIfH8beHyeI3g/oIAwY6UOLHyoA6ZOgAAhY6MPEHxoA6Z/4/t4f8TzeE6AACG7oQAIgAEAJHwIA6Y4IQAgToAAIEgv1T18eBt4P+CAADvAAAA/oAAPY71CQDhgAAA4gAAAOKAAAEgxYyksA///QIIADDe9//9Bgf/kLAMAAECCAcg8YIA5YGPOoDiAAABghaAAS//lJTxggDlgY86gOIAAAGCEoABL//9NOGAAADyAgDlghM6gOKAAAEgxazksAwAAQaIAECwD//pBggAISAABeDhgAABIMWFhLAMAAECCAWg4gAAUOKD//EgAARl8fRt4OGAAAGPkUEh/pet4SDF1pSwDAABAggEgOIAEADig/+BIAADxfHsbeH+j63h/ZNt4OKAEADjAIABIMX8NLAMAAECCAOSA2wBAO4YB/1ecACyDWwJIgHsCRHwaG5Z8ABnWfADQUUGiABx/RNN4fKMA0H9FKDh/RRoUfITQUHzGIhSCuwIgfyaqFHwZ4EBAoAAIf5njeH9k23hIAABxfyTLeDigACBIAABtfHsbeH+j63h/ZNt4f4XjeDjAIgBIMX6JLAMAAECCAGBIL9Oxf5vSFH9j23h/hON4SC/h4SwDAAFAggA4SC/TqXy6qhSAbYhAf2TbeEgqpz2Tn0Isk39CMIPbADRIAAAogG2IQEgqpTCAbYhASCqepH9j23hIL+QRSC/TbX9k23hL///hf6PreEgxdfl/pOt4S///0ThgAABIMWqlLB4AAEGCAAx/yAOmToAAIX8Dw3hIL9NJPGCAOkgAE8hDdXN0b20gUkVMIEZpbGUA",
    _b["GZLP01" /* EU */] = "PYCAMGGMl7x9iAOmToAAITxggDBgY7XUSAAABXyIAqY4hAA4SAABQT2AgDBhjIFgfYkDpk6ABCE4YAAAPICAADigAAA9gIABYYx9oH2JA6ZOgAQglCH/4HwIAqaQAQAkv6EACHx+G3h8nyN4P6CAsH+j63hIAAAFfIgCpjiE/4g4oAPwPYCAM2GMCqB9iAOmToAAIX+j63g4gAPwSAAA4ZOtmOw4fQPwkG2Y6DxggDBgY7W4Y6QA5EgAAK09gIAwYYy12H2JA6Z/w/N4f+T7eLuhAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYwUsPICAsGCEAQRIAABtf+P7eEuAtLx8fxt4fJ4jeHy9K3g/gIAAY4NMaDyAgLA4oAPwS4MJgWODTGg4gAPwSAAAUTxggABgY2QIY4RONEgAACk8YIAwYGO11DyAgABghEy8SAAAFX/j+3h/xPN4f6XreEiAA9B8gyBQVIQBujygSAB8pSN4kKMAADiAAASUIf/gfAgCppABACS/oQAIfH8beHyeI3g/oIAwY6WCeHyoA6ZOgAAhY6ODXHxoA6Z/4/t4f8TzeE6AACG7oQAIgAEAJHwIA6Y4IQAgToAAIEgwSYl8eBt4P+CAADvAAAA/oAAPY71CQDhgAAA4gAAAOKAAAEgx2zksA///QIIADDe9//9Bgf/kLAMAAECCAcg8YIA7YGMGoDiAAABghaAAS//lJTxggDtgYwagOIAAAGCEoABL//9NOGAAADyAgDtghAagOKAAAEgx40ksAwAAQaIAECwD//pBggAISAABeDhgAABIMdlxLAMAAECCAWg4gAAUOKD//EgAARl8fRt4OGAAAGPkUEh/pet4SDHttSwDAABAggEgOIAEADig/+BIAADxfHsbeH+j63h/ZNt4OKAEADjAIABIMfcdLAMAAECCAOSA2wBAO4YB/1ecACyDWwJIgHsCRHwaG5Z8ABnWfADQUUGiABx/RNN4fKMA0H9FKDh/RRoUfITQUHzGIhSCuwIgfyaqFHwZ4EBAoAAIf5njeH9k23hIAABxfyTLeDigACBIAABtfHsbeH+j63h/ZNt4f4XjeDjAIgBIMfaZLAMAAECCAGBIMEf9f5vSFH9j23h/hON4SDBWLSwDAAFAggA4SDBH9Xy6qhSAbYhIf2TbeEgrImGTn0Isk39CMIPbADRIAAAogG2ISEgrIFSAbYhISCsZyH9j23hIMFhdSDBHuX9k23hL///hf6PreEgx7gl/pOt4S///0ThgAABIMeK1LB4AAEGCAAx/yAOmToAAIX8Dw3hIMEeVPGCAPEgAE8hDdXN0b20gUkVMIEZpbGUA",
    _b["GZLE01" /* US */] = "PYCAMGGMRhx9iAOmToAAITxggDBgY2RASAAABXyIAqY4hAA4SAABQT2AgDBhjC/AfYkDpk6ABCE4YAAAPICAADigAAA9gIABYYx9fH2JA6ZOgAQglCH/4HwIAqaQAQAkv6EACHx+G3h8nyN4P6CAsH+j63hIAAAFfIgCpjiE/4g4oAPwPYCAMmGMtUh9iAOmToAAIX+j63g4gAPwSAAA4ZOtmMw4fQPwkG2YyDxggDBgY2QkY6QA5EgAAK09gIAwYYxkRH2JA6Z/w/N4f+T7eLuhAAiAAQAkfAgDpjghACBOgAQgfH8beDxggTBgYwUsPICAsGCEAQRIAABtf+P7eEuAYyh8fxt4fJ4jeHy9K3g/gIAAY4NMaDyAgLA4oAPwS4K0KWODTGg4gAPwSAAAUTxggABgY2QIY4RONEgAACk8YIAwYGNkQDyAgABghEy8SAAAFX/j+3h/xPN4f6XreEiAA9B8gyBQVIQBujygSAB8pSN4kKMAADiAAASUIf/gfAgCppABACS/oQAIfH8beHyeI3g/oIAwY6Uw2HyoA6ZOgAAhY6MxvHxoA6Z/4/t4f8TzeE6AACG7oQAIgAEAJHwIA6Y4IQAgToAAIEgv9+l8eBt4P+CAADvAAAA/oAAPY71CQDhgAAA4gAAAOKAAAEgxheEsA///QIIADDe9//9Bgf/kLAMAAECCAcg8YIA6YGOZoDiAAABghaAAS//lJTxggDpgY5mgOIAAAGCEoABL//9NOGAAADyAgDpghJmgOKAAAEgxjfEsAwAAQaIAECwD//pBggAISAABeDhgAABIMYQZLAMAAECCAWg4gAAUOKD//EgAARl8fRt4OGAAAGPkUEh/pet4SDGYXSwDAABAggEgOIAEADig/+BIAADxfHsbeH+j63h/ZNt4OKAEADjAIABIMaHFLAMAAECCAOSA2wBAO4YB/1ecACyDWwJIgHsCRHwaG5Z8ABnWfADQUUGiABx/RNN4fKMA0H9FKDh/RRoUfITQUHzGIhSCuwIgfyaqFHwZ4EBAoAAIf5njeH9k23hIAABxfyTLeDigACBIAABtfHsbeH+j63h/ZNt4f4XjeDjAIgBIMaFBLAMAAECCAGBIL/Zdf5vSFH9j23h/hON4SDAEjSwDAAFAggA4SC/2VXy6qhSAbYhIf2TbeEgq0MGTn0Isk39CMIPbADRIAAAogG2ISEgqzrSAbYhISCrIKH9j23hIMAa9SC/2GX9k23hL///hf6PreEgxmLF/pOt4S///0ThgAABIMY1dLB4AAEGCAAx/yAOmToAAIX8Dw3hIL/X1PGCAO0gAE8hDdXN0b20gUkVMIEZpbGUA",
    _b);
function decodeBinaryData(S) {
    return Uint8Array.from(window.atob(S), function (c) { return c.charCodeAt(0); }).buffer;
}
function patch(view, fileNumber) {
    var version = readString(view.buffer, 0x00, 0x06);
    var validVersions = ["GZLJ01" /* JP */, "GZLE01" /* US */, "GZLP01" /* EU */];
    if (!validVersions.includes(version))
        return 2 /* WrongSaveFileGameID */;
    var internalFilename = readString(view.buffer, 0x08, 0x8);
    if (internalFilename !== 'gczelda\0')
        return 3 /* WrongSaveFileInternalName */;
    if (fileNumber < 1 || fileNumber > 3)
        return 4 /* InvalidFileNumber */;
    var offsetFile0 = ((fileNumber - 1) * 0x770) + 0x2048;
    var offsetFile1 = offsetFile0 + 0x2000;
    function patchFilesU32(offset, value) {
        view.setUint32(offsetFile0 + offset, value, false);
        view.setUint32(offsetFile1 + offset, value, false);
    }
    function patchFilesS64(offset, value) {
        view.setBigInt64(offsetFile0 + offset, BigInt(value), false);
        view.setBigInt64(offsetFile1 + offset, BigInt(value), false);
    }
    function patchFilesBytes(offset, value) {
        writeBytes(view.buffer, offsetFile0 + offset, value);
        writeBytes(view.buffer, offsetFile1 + offset, value);
    }
    // Write the new file name (Link's name).
    var newFileName = "REL Loader\0";
    patchFilesBytes(0x157, makeStrBytes(newFileName));
    // Overwrite the next stage string with a bunch of filler 3s.
    patchFilesU32(0x30, 0x33333333);
    patchFilesU32(0x34, 0x33333333);
    patchFilesU32(0x38, 0x33333333);
    patchFilesU32(0x3C, 0x33333333);
    // Write the pointer to the pointer to the init ASM function.
    if (version === "GZLJ01" /* JP */) {
        patchFilesU32(0x40, 0x803B8108 + 0x200 - 0xB0);
    }
    else if (version === "GZLE01" /* US */) {
        patchFilesU32(0x40, 0x803C4C08 + 0x200 - 0xB0);
    }
    else if (version === "GZLP01" /* EU */) {
        patchFilesU32(0x40, 0x803CC530 + 0x200 - 0xB0);
    }
    // Write the pointer to the init ASM function.
    if (version === "GZLJ01" /* JP */) {
        patchFilesU32(0x1F8, 0x803B8108 + 0x204);
    }
    else if (version === "GZLE01" /* US */) {
        patchFilesU32(0x1F8, 0x803C4C08 + 0x204);
    }
    else if (version === "GZLP01" /* EU */) {
        patchFilesU32(0x1F8, 0x803CC530 + 0x204);
    }
    // Write the init ASM function.
    patchFilesBytes(0x1FC, decodeBinaryData(BinaryDataInit[version]));
    // Write the main ASM function.
    patchFilesBytes(0x1FC + decodeBinaryData(BinaryDataInit[version]).byteLength, decodeBinaryData(BinaryDataMain[version]));
    // Write the last saved time as the current time, as a form of build date
    var OS_BUS_CLOCK = 162000000;
    var ticks = (Date.now() - Date.UTC(2000, 0, 1)) / 1000 * (OS_BUS_CLOCK / 4);
    patchFilesS64(0x18, ticks);
    var dataFieldSize = 0x768;
    var dataFieldSum = 0;
    for (var i = 0; i < dataFieldSize; i++)
        dataFieldSum = (dataFieldSum + view.getUint8(offsetFile0 + i)) >>> 0;
    // Patch in checksums.
    patchFilesU32(0x768, dataFieldSum);
    patchFilesU32(0x76C, (-(dataFieldSum + dataFieldSize)) >>> 0);
    return 0 /* Success */;
}
function downloadFile(filename, data) {
    var blob = new Blob([data], { type: 'application/octet-stream' });
    var url = window.URL.createObjectURL(blob);
    var elem = document.createElement('a');
    elem.setAttribute('href', url);
    elem.setAttribute('download', filename);
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
}
function displayResult(e) {
    var errorMessage = document.querySelector('div#errormessage');
    if (e === 0 /* Success */) {
        errorMessage.textContent = '';
        return true;
    }
    else if (e === 1 /* NotSaveFile */) {
        errorMessage.textContent = 'The file you specified was not a valid .gci save file';
        return false;
    }
    else if (e === 2 /* WrongSaveFileGameID */) {
        errorMessage.textContent = 'This save file is not for The Legend of Zelda: The Wind Waker';
        return false;
    }
    else if (e === 3 /* WrongSaveFileInternalName */) {
        errorMessage.textContent = 'This save file has the wrong internal ID. Please make sure you are using a normal The Legend of Zelda: The Wind Waker save file.';
        return false;
    }
    else if (e === 4 /* InvalidFileNumber */) {
        // should not happen
        throw "whoops";
    }
}
function fileSubmitted() {
    var input = document.querySelector('input#fileupload');
    var file = input.files[0];
    if (!file.name.endsWith('.gci')) {
        if (!displayResult(1 /* NotSaveFile */))
            return;
    }
    var fileNumberInput = document.querySelector('select#filenumber');
    var fileNumber = Number(fileNumberInput.selectedOptions[0].textContent);
    var outputFilename = file.name.replace(/\..*$/, '') + "_REL_Loader.gci";
    var reader = new FileReader();
    reader.onload = function () {
        var buffer = reader.result;
        var view = new DataView(buffer);
        var res = patch(view, fileNumber);
        if (!displayResult(res))
            return;
        downloadFile(outputFilename, buffer);
    };
    reader.readAsArrayBuffer(file);
}
function main() {
    var form = document.querySelector('form#uploadform');
    form.onsubmit = function (e) {
        fileSubmitted();
        return false;
    };
}
window.onload = function () {
    main();
};
