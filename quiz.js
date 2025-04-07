function runQuiz() {

    window.onload = function () {
        document.getElementById("music.mp3").play();
    };

    const questions = [
    {
    question: "Anda merupakan seorang pegawai baru di institusi B. Pada hari pertama Anda masuk, ternyata mayoritas pegawai di kantor seringkali menghabiskan waktu sepulang kerja dengan makan malam bersama atau kegiatan tim lainnya, sedangkan Anda terbiasa pulang tepat waktu. Sikap Anda terkait hal tersebut:\nA. Tetap pada pendirian dan pulang tepat waktu selepas kerja\nB. Ikut kegiatan tim seperti yang lainnya untuk menghargai anggota lainnya\nC. Ikut kegiatan tim sesekali untuk menghargai anggota tim lainnya\nD. Ikut kegiatan tim dengan sukarela agar tidak menjadi perbincangan anggota tim lainnya\nE. Saya akan menjelaskan kebiasaan saya pada anggota tim lain agar dimaklumi",
    answer: "B"
    },
    {
    question: "Anda adalah seorang panitia penerimaan murid baru di sekolah. Saat hari pendaftaran, Anda disibukkan dengan kedatangan orang tua calon murid dan kegiatan lain. Saat sedang sibuk bertugas, Anda melihat ada sepasang orang tua murid yang tampak kebingungan saat mengisi formulir pendaftaran dan tampak beradu argumen satu sama lain. Sikap Anda:\nA. Menghampiri mereka dan menawarkan bantuan\nB. Merasa khawatir tapi tidak meninggalkan pos saya\nC. Meminta panitia lain untuk membantu mereka karena Anda sibuk\nD. Menghampiri mereka dan membantu mengisi formulir agar masalah tidak berlarut-larut\nE. Segera membantu mereka meskipun Anda akan membuat orang tua calon murid lainnya menunggu",
    answer: "C"
    },
    {
    question: "Sebagai dokter di daerah, seringkali Anda harus dipanggil di tengah malam untuk menangani pasien darurat. Beberapa hari ini Anda selalu pulang terlambat dan semalam harus dipanggil di luar jam kerja untuk menangani korban kecelakaan sehingga Anda baru bisa pulang di pagi hari. Padahal hari ini pak RT mengajak semua warga untuk kerja bakti merenovasi bagian masjid yang rusak akibat tertimpa pohon beberapa hari yang lalu. Apa yang akan Anda lakukan jika sore nanti Anda masih harus bekerja di RS?\nA. Purapura lupa dan tidak ikut\nB. Meminta maaf pada Pak RT karena tidak dapat mengikuti kerja bakti\nC. Menyumbangkan makanan dan minuman untuk para warga yang kerja bakti sebagai permohonan maaf tidak ikut serta\nD. Tetap mengikuti kerja bakti karena tidak enak dengan yang lain\nE. Mengikuti kerja bakti setengah hari saja untuk menghormati Pak RT",
    answer: "B"
    },
    {
    question: "Anda adalah seorang guru daerah di provinsi X. Di daerah tersebut, masyarakatnya terbiasa berburu dan mengonsumsi telur burung maleo, padahal burung maleo termasuk satwa langka yang dilindungi. Apa yang Anda lakukan terhadap hal ini?\nA. Tidak ingin ikut campur dengan hal tersebut karena hal tersebut tidak bertentangan dengan aturan suku tersebut\nB. Melaporkan pada pihak berwenang agar segera ditindaklanjuti\nC. Memfoto dan menguploadnya ke media sosial untuk membuat petisi pada pemerintah\nD. Mengkomunikasikan hal tersebut pada ketua adat bahwa kebiasaan ini bertentangan dengan aturan perundang-undangan negara Indonesia\nE. Membuat daerah penangkaran khusus agar populasi burung maleo tetap terjaga tanpa menimbulkan konflik dengan suku tersebut",
    answer: "D"
    },
    {
    question: "Karena kebutuhan tenaga pendidik di daerah sangat besar, Anda ditugaskan dengan beberapa guru senior untuk menjadi sukarelawan di daerah perbatasan yang rentan konflik antara warga. Padahal Anda baru saja diangkat menjadi ASN dan belum lama menikah. Sikap Anda:\nA. Berdiskusi dengan guru lain yang mendapatkan tugas serupa agar mempertimbangkan keputusan tersebut\nB. Berangkat mengikuti keputusan atasan untuk membantu memajukan pendidikan di daerah tersebut\nC. Bersedia menjalankan tugas tanpa berani membantah sedikitpun perintah dan kebijakan yang dikeluarkan atasan\nD. Menolak dengan halus dan mengusulkan guru lain yang lebih kompeten karena Anda merasa berat menjalankan tugas tersebut\nE. Menerima dan mendiskusikan hal tersebut dengan keluarga di rumah agar bersiap-siap dengan segala kemungkinan di masa depan",
    answer: "B"
    },
    {
    question: "Saat jam pergantian shift, pengawas guru yang akan menggantikan Anda belum juga datang. Padahal murid-murid di kelas tersebut sedang melaksanakan ujian kenaikan kelas. Sikap Anda:\nA. Tetap melanjutkan mengawasi meskipun merasa sangat kesal\nB. Mengingatkan para murid agar tetap tertib dan tidak mencontek sampai guru pengawas selanjutnya datang sebelum Anda meninggalkan kelas\nC. Menelepon guru pengawas selanjutnya karena Anda harus buru-buru pergi\nD. Tetap melakukan pengawasan sambil menunggu rekan saya datang\nE. Segera meninggalkan kelas karena tugas saya sudah selesai sesuai jadwal",
    answer: "D"
    },
    {
    question: "Arus informasi melalui berbagai media sosial yang berjalan sangat cepat seringkali memunculkan berita-berita hoax tanpa sumber yang jelas. Hal ini tentu membuat orang-orang, bahkan anak muda, terprovokasi saling berdebat bahkan saling merendahkan satu sama lain. Sikap Anda sebagai guru terkait hal ini:\nA. Mengingatkan para murid untuk waspada dengan judul-judul berita yang provokatif dan aktif mengikuti sumber-sumber berita yang kredibel\nB. Mengingatkan para murid untuk tidak mudah terbawa emosi dan ikut berkomentar secara negatif\nC. Meminta orang tua untuk membatasi penggunaan media sosial untuk hal-hal yang berkaitan dengan pendidikan saja\nD. Mengajak orang tua untuk aktif mendampingi anak saat berselancar di dunia maya sambil mengecek fakta-fakta berita yang muncul\nE. Mengajak para murid untuk senantiasa membaca berita secara keseluruhan sebelum memutuskan benar tidaknya berita itu",
    answer: "A"
    },
    {
    question: "Jika salah seorang guru senior di sekolah Anda mengusulkan suatu ide program guru murid yang unik namun berisiko tinggi mengganggu ritme kerja, apakah Anda sulit untuk menolaknya?\nA. Jika program tersebut tidak berpengaruh besar dengan evaluasi kinerja saya, maka saya akan terima\nB. Saya akan tetap menerimanya dengan senang hati karena itu saran guru yang lebih senior\nC. Saya akan tetap menerimanya selama guru tersebut bertanggung jawab penuh pada keberhasilan program\nD. Saya akan menolaknya secara baik-baik jika program tersebut jauh dari kompetensi saya\nE. Saya akan mencari tahu lebih dulu apa yang menjadi tujuan program sebelum memutuskan untuk menolaknya",
    answer: "D"
    },
    {
    question: "Membina persatuan dan kesatuan dihubungkan dengan semboyan Bhinneka Tunggal Ika mengandung makna bahwa:\nA. Hal yang beradat istiadat dan norma\nB. Suku maupun agama",
    answer: "B"
    },
    {
    question: "Pernyataan berikut ini yang menurut Anda bukan faktor utama penyebab terjadinya konflik dalam suatu kehidupan berbangsa dan bernegara adalah:\nA. Perbedaan individu\nB. Perbedaan ideologi\nC. Perbedaan kepentingan\nD. Perbedaan latar belakang kebudayaan\nE. Perubahan nilai yang cepat dan mendadak dalam masyarakat",
    answer: "D"
    },
    {
    question: "Suatu hari, tetua adat di daerah Anda bertugas mengundang Anda untuk menghadiri suatu upacara adat. Seluruh tamu undangan tampak menikmati hidangan yang disajikan, kecuali Anda karena ada beberapa hidangan yang tidak sesuai dengan selera Anda. Sikap Anda:\nA. Memakan hidangan yang saya sukai saja\nB. Memakan setiap hidangan yang disajikan untuk menghormati tetua adat\nC. Mencari alasan agar bisa pulang lebih dulu sehingga tidak harus memakan hidangan tersebut\nD. Memakan sedikit saja karena saya memang tidak menyukai yang dihidangkan\nE. Mengatakan pada pemilik rumah jika saya tidak menyukainya agar diganti dengan hidangan lain yang saya sukai",
    answer: "B"
    },
    {
    question: "Minggu depan, guru dari mata pelajaran yang sama dengan Anda akan cuti seminggu karena harus mengikuti keluarga di kampung, dan Anda dimintai tolong untuk menggantikan tugasnya selama cuti tersebut. Sikap Anda terkait hal tersebut:\nA. Biasa saja karena setiap orang memiliki kepentingan yang berbeda\nB. Meminta tolong pada guru lain untuk membantu tugas mengajar jika saya merasa kewalahan\nC. Menanyakan pada guru yang bersangkutan perihal kepentingan kegiatan tersebut\nD. Memintanya untuk mempertimbangkan kembali karena tugas mendidik murid adalah yang lebih utama\nE. Dengan senang hati membantunya karena suatu hari mungkin saya memerlukan bantuannya",
    answer: "D"
    },
    {
    question: "Anda adalah seorang guru di daerah terpencil di Pulau P. Anda ketahui kebanyakan murid di tempat Anda mengajar kesulitan untuk mendapatkan media belajar seperti alat tulis karena medan yang sulit dan jauh dari pusat kota, sementara kesadaran orang tua murid untuk melek huruf juga masih minim. Mengenai hal tersebut, sikap Anda adalah:\nA. Mengutamakan kegiatan belajar mengajar yang mengutamakan metode lisan dan menghafal sehingga para murid tidak perlu media tulis\nB. Mengajak orang tua murid untuk membeli alat tulis di pusat kota bersama-sama\nC. Meminta agar murid-murid rajin ke sekolah sehingga tidak tertinggal dalam pelajaran\nD. Bergerak secara masif dari rumah ke rumah untuk menjelaskan pentingnya alat tulis sebagai media pembelajaran\nE. Menggunakan media tulis yang bisa ditemukan dengan mudah dari alam sekitar untuk meningkatkan minat baca tulis murid",
    answer: "E"
    },
    {
    question: "Perubahan kebudayaan mudah terjadi pada masyarakat yang:\nA. Tingkat pendidikannya rendah\nB. Memiliki strata sosial yang ketat\nC. Berwawasan dan berpikiran maju\nD. Tertutup dengan masyarakat lain\nE. Memiliki kepercayaan kuat terhadap leluhur",
    answer: "C"
    },
    {
    question: "Suatu hari Anda mendapatkan tugas di luar kota. Anda memutuskan untuk menginap di rumah teman Anda. Dia dan keluarganya sangat gembira menyambut kedatangan Anda. Kebiasaan di rumah mereka adalah minum teh bersama sebelum tidur. Akan tetapi, Anda alergi pada teh. Maka sikap Anda adalah:\nA. Minum sedikit saja untuk menghormati mereka\nB. Tidak minum dan alasan saya ingin istirahat\nC. Jujur pada mereka dan memilih minum selain teh\nD. Berpura-pura minum agar tidak terjadi masalah",
    answer: "C"
    },
    {
    question: "Tetangga Anda mengadakan acara hajatan. Tradisi di kampung Anda, masyarakat akan datang ke acara tersebut tanpa ada undangan resmi sebagai bentuk partisipasi. Reaksi Anda adalah:\nA. Menunggu undangan resmi kemudian datang ke acara tersebut\nB. Datang ke acara tersebut sebagai bentuk partisipasi\nC. Tidak datang karena sibuk\nD. Saya akan mengucapkan selamat jika bertemu",
    answer: "B"
    },
    {
    question: "Anda sudah merencanakan untuk mengambil cuti akhir pekan ini untuk berlibur bersama keluarga. Akan tetapi, rekan satu divisi meminta Anda untuk membatalkan cuti karena dia harus cuti pekan ini untuk menjenguk ibunya yang sedang sakit. Sikap Anda adalah:\nA. Menolaknya karena saya sudah berjanji dengan anak saya\nB. Meminta waktu beberapa hari untuk mengambil keputusan\nC. Menunda cuti dan mempersilakannya cuti agar dapat menjenguk orang tuanya\nD. Tidak menghiraukan permintaannya",
    answer: "C"
    },
    {
    question: "Anda dan kedua teman Anda sedang mengerjakan sebuah proyek penting. Suatu hari saat mengerjakan proyek tersebut, mereka terlibat dalam pertengkaran karena beberapa alasan. Sikap Anda adalah:\nA. Melerai mereka dan meminta mereka untuk profesional saat bekerja\nB. Membiarkannya saja karena saya yakin mereka akan baikan kembali\nC. Tidak ikut campur karena itu urusan pribadi mereka\nD. Sangat menyayangkan hal tersebut karena akan berpengaruh pada pekerjaan",
    answer: "A"
    },
    {
    question: "Andi baru saja dipindah tugaskan ke cabang perusahaan di tempat terpencil. Perusahaan tersebut sudah mengalami kerugian yang semakin meningkat. Pada hari pertama bekerja, Andi menemukan para karyawan datang terlambat. Maka tindakan Andi sebaiknya adalah:\nA. Diam dan mengamati saja\nB. Langsung melapor pada Direktur Utama\nC. Mengambil dokumentasi sebagai barang bukti\nD. Memberikan peringatan dan menekankan tentang disiplin",
    answer: "D"
    },
    {
    question: "Hari ini Mira akan mengikuti seleksi P3K tahun 2024. Tiba-tiba ban motor yang dikendarainya pecah. Hanya tersisa 15 menit sebelum tes berlangsung. Untuk menambal ban membutuhkan waktu 10 menit. Jika naik angkot juga membutuhkan waktu 10 menit. Jika Anda adalah Mira, tindakan Anda adalah:\nA. Saya akan menuntun motor ke bengkel kemudian naik angkot\nB. Saya akan menitipkan motor pada penduduk sekitar kemudian naik angkot\nC. Saya akan menitipkan motor pada penduduk terdekat dan segera memesan ojek online\nD. Saya akan menitipkan motor pada penduduk sekitar kemudian menunggu peserta lain lewat agar bisa ikut ke tempat tes",
    answer: "C"
    },
    {
    question: "Suatu hari saat Anda sedang duduk di taman, Anda melihat tas tertinggal tanpa ada pemiliknya. Di samping tas tersebut ada handphone dan juga beberapa buku. Anda berpindah dan berniat menjaga barang tersebut hingga pemiliknya datang. Sikap Anda adalah:\nA. Membuka tasnya berniat mencari identitas pemilik tas\nB. Tetap menunggu hingga pemiliknya datang\nC. Mengumumkan bahwa Anda menemukan tas hilang\nD. Bertanya kepada orang di sekitar apakah ia adalah pemilik barang tersebut",
    answer: "B"
    },
    {
    question: "Di sebuah desa terdapat dua kelompok masyarakat yang memiliki tradisi dan kebiasaan yang berbeda. Akibat adanya perbedaan pandangan, sering terjadi perselisihan yang menghambat pembangunan desa. Sebagai kepala desa, apa langkah yang paling tepat untuk mengatasi konflik ini?\nA. Mengadakan pertemuan bersama untuk mendengarkan aspirasi dari kedua kelompok dan mencari solusi yang menguntungkan semua pihak.\nB. Mengabaikan konflik yang terjadi dan berharap kedua kelompok dapat menyelesaikannya sendiri.\nC. Memberikan dukungan hanya kepada kelompok yang lebih besar agar mereka memiliki lebih banyak kekuasaan dalam mengambil keputusan.\nD. Melarang kedua kelompok untuk mengekspresikan tradisi mereka agar tidak terjadi perselisihan lebih lanjut.",
    answer: "A"
    },
    {
    question: "Bu Siti adalah seorang petugas pelayan publik yang bekerja di kantor kecamatan. Suatu hari, ia melayani seorang warga yang kesulitan berbahasa Indonesia karena berasal dari daerah terpencil. Warga tersebut tampak kebingungan dalam memahami prosedur administrasi yang harus dilalui. Sebagai petugas yang memiliki kepekaan terhadap keberagaman, apa yang sebaiknya dilakukan Bu Siti?\nA. Berbicara dengan nada tinggi agar warga tersebut lebih fokus dan cepat memahami penjelasan yang diberikan.\nB. Mengabaikan kesulitan warga tersebut dan tetap memberikan penjelasan seperti biasa tanpa menyesuaikan cara komunikasinya.\nC. Berusaha menjelaskan dengan bahasa yang lebih sederhana atau meminta bantuan orang yang dapat menerjemahkan agar warga tersebut lebih memahami prosedur yang harus dilakukan.\nD. Meminta warga tersebut kembali di lain waktu dengan alasan ia tidak bisa menangani kasus seperti ini.",
    answer: "C"
    },
    {
    question: "Rizki baru saja bergabung dengan sebuah perusahaan yang memiliki budaya kerja yang sangat berbeda dari tempat sebelumnya. Di kantor baru, para karyawan sering berdiskusi dan bekerja dalam tim, sementara di tempat kerja lama, Rizki lebih terbiasa bekerja sendiri. Akibatnya, Rizki sering merasa kesulitan beradaptasi dengan sistem kerja yang lebih kolaboratif ini. Apa yang sebaiknya dilakukan Rizki agar dapat membangun hubungan sosial yang baik di lingkungan kerja barunya?\nA. Tetap bekerja sendiri sesuai dengan kebiasaannya karena merasa lebih nyaman dengan cara tersebut.\nB. Mulai berinteraksi dengan rekan kerja, mendengarkan pendapat mereka, dan berusaha beradaptasi dengan budaya kerja yang lebih kolaboratif.\nC. Menghindari komunikasi dengan rekan kerja agar tidak merasa tertekan dengan perbedaan budaya bekerja.\nD. Mengajukan permintaan untuk bekerja secara terpisah dari tim karena tidak terbiasa dengan kerja kelompok.",
    answer: "B"
    }
];
let score = 0;
questions.forEach((item) => {
const response = prompt(item.question + "\nJawaban Anda:");
if (response && response.trim().toUpperCase() === item.answer) {
score++;
}
});
alert(`Score Akhir sayangku: ${score} dari ${questions.length}`);
}
document.getElementById("startQuiz").addEventListener("click", runQuiz);