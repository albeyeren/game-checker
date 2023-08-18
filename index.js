function gameCheker(titleGame) {
    //Variabel gameBoxes TIDAK BOLEH DIUBAH
    const gameBoxes = [
        ['2020', 'fifa', 'pes', 'football-manager', 'winning-eleven'],
        ['2021', 'fifa', 'football-manager', 'nba'],
        ['2022', 'nba', 'pes', 'winning-eleven'],
        ['2023', 'winning-eleven', 'nba', 'fifa']
    ];

    //Write code here
    if (typeof titleGame !== 'string') {
        return 'invalid data';
    }

    if (titleGame === '') {
        return 'masukan game yang ingin dicari';
    }

    let jumlahGame = 0;
    const daftarTahun = [];

    for (let i = 0; i < gameBoxes.length; i++) {
        const tahun = gameBoxes[i][0];
        const games = gameBoxes[i].slice(1);

        for (let j = 0; j < games.length; j++) {
            if (games[j] === titleGame) {
                jumlahGame++;
                daftarTahun.push(tahun);
                break;
            }
        }
    }

    if (jumlahGame === 0) {
        return `${titleGame} tidak ada pada box manapun`;
    }

    const tahunGame = Array.from(new Set(daftarTahun)).join(', ');
    return `${titleGame} berjumlah ${jumlahGame} pada box ${tahunGame}`;
}

console.log(gameCheker('fifa')); // fifa berjumlah 3 pada box 2020, 2021, 2023
console.log(gameCheker('pes')); // pes berjumlah 2 pada box 2020, 2022
console.log(gameCheker('winning-eleven')); //winning-eleven berjumlah 3 pada box 2020, 2022, 2023
console.log(gameCheker('dota')); // game dota tidak ada pada box manapun
console.log(gameCheker('')); //masukan game yang ingin dicari
console.log(gameCheker()); //invalid data
console.log(gameCheker(20)); //invalid data
console.log(gameCheker(true)); //invalid data
console.log(gameCheker(false)); //invalid data
console.log(gameCheker(null)); //invalid data