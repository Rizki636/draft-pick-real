let bans = { left: [], right: [] };
let picks = { left: [], right: [] };

function selectHero(hero) {
    // Cek apakah hero sudah di-ban atau di-pick
    if (bans.left.includes(hero) || bans.right.includes(hero) || picks.left.includes(hero) || picks.right.includes(hero)) {
        alert('Hero ini sudah di-ban atau di-pick!');
        return;
    }

    // Contoh untuk menambahkan ban atau pick (logika sederhana)
    if (bans.left.length < 5) {
        bans.left.push(hero);
        document.getElementById('team-left-bans').innerHTML += `<img src="https://github.com/Rizki636/Draft-Pick-MLBB/blob/main/HeroPick/${hero}.png" alt="${hero}">`;
    } else if (bans.right.length < 5) {
        bans.right.push(hero);
        document.getElementById('team-right-bans').innerHTML += `<img src="https://github.com/Rizki636/Draft-Pick-MLBB/blob/main/HeroPick/${hero}.png" alt="${hero}">`;
    } else {
        alert('Semua ban sudah digunakan!');
    }
}
