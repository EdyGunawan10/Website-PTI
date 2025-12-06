const foto = document.getElementById("fotoProfil");
const nama = document.getElementById("nama");
const prodi = document.getElementById("prodi");
const kampus = document.getElementById("kampus");
const minat = document.getElementById("minat");
const motivasi = document.getElementById("motivasi");

async function loadProfile() {
  try {
    const response = await fetch("profile.json?cache=" + Date.now());
    const data = await response.json();

    foto.src = data.foto || "default.jpg";
    nama.textContent = data.nama || "Nama belum diisi";
    prodi.textContent = data.prodi || "Program studi belum diisi";
    kampus.textContent = data.kampus || "Nama kampus belum diisi";
    minat.textContent = data.minat || "Belum ada data minat.";
    motivasi.textContent = data.motivasi || "Belum ada motivasi.";

  } catch (error) {
    console.error("Gagal memuat data profil:", error);

    nama.textContent = "I Ketut Edy Gunawan";
    prodi.textContent = "Mahasiswa S1 Terapan Teknologi Rekayasa Perangkat Lunak || Teknologi Informasi";
    kampus.textContent = "Politeknik Negeri Bali";
    minat.textContent = "Saya memiliki minat untuk menjadi Ketua Umum dari organisasi Unit Kegiatan Mahasiswa Computer Club dan menjadi Koordinator Tingkat Kelas A TRPL 2025 sampai 8 Semester. Saya memiliki bakat di bidang public speaking, publikasi, dokumentasi, dan desain (PDD), serta saya jago dalam bermain game Play Station, XBOX.";
    motivasi.textContent = "Saya memiliki ketertarikan kuat pada dunia teknologi, terutama dalam pengembangan website, eksplorasi solusi digital, dan pembelajaran teknologi baru. Saya senang menciptakan sesuatu yang bermanfaat, memecahkan masalah melalui pendekatan kreatif, serta terus mengembangkan keterampilan agar dapat berkontribusi pada inovasi di bidang rekayasa perangkat lunak. Selain itu, saya juga menikmati kegiatan fotografi, editing, desain grafis, dan pengembangan game sebagai cara untuk mengekspresikan kreativitas visual dan memperluas kemampuan dalam produksi konten digital.";
  }
}


loadProfile();
