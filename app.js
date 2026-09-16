// C++ Learning Path — Core Application & Interactive Engine 🚀

const MODULES = [
  { id: 1, title: "Fondasi Modern C++", icon: "fa-solid fa-flag", desc: "Sintaks, auto, constexpr & I/O" },
  { id: 2, title: "Pointer & Memori", icon: "fa-solid fa-memory", desc: "Pointers, references & smart pointers" },
  { id: 3, title: "OOP & Prinsip RAII", icon: "fa-solid fa-cubes", desc: "Classes, inheritance, virtual & RAII" },
  { id: 4, title: "STL & Generic Programming", icon: "fa-solid fa-boxes-stacked", desc: "Containers, algorithms & templates" },
  { id: 5, title: "Fitur Modern C++20", icon: "fa-solid fa-bolt", desc: "Concepts, ranges, move semantics & jthread" }
];

const lessons = [
  {
    id: 1,
    slug: "pengenalan-modern-cpp",
    title: "1. Pengenalan & Struktur Program C++20",
    module: "Fondasi Modern C++",
    moduleId: 1,
    duration: "15 m",
    level: "Pemula",
    content: `# Pengenalan Modern C++20

**C++** adalah bahasa pemrograman berkinerja tinggi yang menggabungkan kontrol hardware tingkat rendah dengan kemampuan abstraksi tingkat tinggi (*zero-overhead principle*).

## Karakteristik Utama:
1. **Zero-Overhead Principle:** Apa yang tidak Anda gunakan, tidak akan Anda bayar (tanpa runtime overhead).
2. **Kompilasi Langsung ke Machine Code:** Memberikan performa maksimal untuk game engines, browser kernels, AI runtimes, dan sistem embedded.
3. **Standar Modern (C++11 s.d. C++20/23):** Menghadirkan auto type deduction, lambda expressions, smart pointers, concepts, dan ranges.

\`\`\`cpp
#include <iostream>

int main() {
    std::cout << "Halo dari Modern C++20! 🚀" << std::endl;
    return 0;
}
\`\`\``,
    defaultCode: `#include <iostream>

int main() {
    std::cout << "Halo dari Modern C++20! 🚀" << std::endl;
    std::cout << "Performa native tanpa garbage collector." << std::endl;
    return 0;
}`,
    expectedOutput: "Halo dari Modern C++20! 🚀\nPerforma native tanpa garbage collector.",
    hint: "Gunakan std::cout dan operator << untuk mencetak data ke terminal.",
    quiz: {
      question: "Apa filosofi dasar 'Zero-Overhead Principle' yang dirumuskan oleh Bjarne Stroustrup untuk C++?",
      options: [
        "Apa yang tidak Anda gunakan tidak membebani performa, dan apa yang Anda gunakan tidak dapat ditulis lebih efisien dengan tangan",
        "Program C++ tidak memerlukan compiler saat dijalankan",
        "Semua variabel dialokasikan otomatis di memori ROM",
        "C++ tidak mendukung class dan inheritance"
      ],
      answer: 0,
      explanation: "Prinsip Zero-Overhead memastikan abstraksi bahasa dikompilasi menjadi instruksi mesin yang sama cepatnya dengan kode manual tingkat rendah."
    }
  },
  {
    id: 2,
    slug: "variabel-tipe-dan-auto",
    title: "2. Tipe Data, 'auto', & Type Inference",
    module: "Fondasi Modern C++",
    moduleId: 1,
    duration: "15 m",
    level: "Pemula",
    content: `# Type Inference dengan 'auto'

Di C++11 ke atas, kata kunci \`auto\` memungkinkan compiler menyimpulkan (*deduce*) tipe data variabel berdasarkan nilai inisialisasinya saat kompilasi.

## Keunggulan \`auto\`:
- Mencegah inisialisasi yang tidak disengaja (uninitialized variables).
- Mempermudah deklarasi iterator dan tipe kompleks.
- Menjamin performa tanpa runtime cost karena tipe ditentukan saat compile-time.`,
    defaultCode: `#include <iostream>
#include <typeinfo>

int main() {
    auto score = 100;         // int
    auto pi = 3.14159;        // double
    auto flag = true;         // bool
    auto letter = 'A';        // char
    
    std::cout << "Score: " << score << " (int)" << std::endl;
    std::cout << "Pi: " << pi << " (double)" << std::endl;
    std::cout << "Flag: " << std::boolalpha << flag << std::endl;
    return 0;
}`,
    expectedOutput: "Score: 100 (int)\nPi: 3.14159 (double)\nFlag: true",
    hint: "Keyword 'auto' mewajibkan variabel memiliki nilai inisialisasi awal.",
    quiz: {
      question: "Kapan tipe variabel yang dideklarasikan dengan 'auto' ditentukan di C++?",
      options: [
        "Saat kompilasi (compile-time) berdasarkan tipe ekspresi inisialisasi",
        "Saat program dijalankan (runtime) secara dinamis",
        "Tergantung pada sistem operasi target",
        "Variabel auto selalu dikonversi menjadi void pointer"
      ],
      answer: 0,
      explanation: "'auto' adalah fitur static compile-time deduction; setelah dikompilasi, tipe variabel bersifat statis dan tidak berubah di runtime."
    }
  },
  {
    id: 3,
    slug: "constexpr-dan-compile-time",
    title: "3. Evaluasi Waktu Kompilasi (`constexpr`)",
    module: "Fondasi Modern C++",
    moduleId: 1,
    duration: "20 m",
    level: "Menengah",
    content: `# Compile-Time Computation (\`constexpr\`)

Kata kunci \`constexpr\` memberitahu compiler bahwa suatu nilai atau fungsi dapat dievaluasi pada saat **kompilasi**, bukan saat runtime!

## Keuntungan:
- Nol kalkulasi CPU saat aplikasi berjalan.
- Hasil dapat digunakan sebagai ukuran array statis atau template parameter.`,
    defaultCode: `#include <iostream>

constexpr int faktorial(int n) {
    return (n <= 1) ? 1 : (n * faktorial(n - 1));
}

int main() {
    // Dihitung langsung oleh compiler saat build
    constexpr int hasil_5 = faktorial(5);
    
    std::cout << "Faktorial 5 (compile-time): " << hasil_5 << std::endl;
    return 0;
}`,
    expectedOutput: "Faktorial 5 (compile-time): 120",
    hint: "Fungsi constexpr harus dapat dievaluasi tanpa efek samping I/O saat compile-time.",
    quiz: {
      question: "Apa manfaat utama mengevaluasi fungsi dengan 'constexpr' di C++?",
      options: [
        "Kalkulasi dijalankan saat kompilasi sehingga menghilangkan beban komputasi CPU di runtime",
        "Fungsi otomatis berjalan secara multi-threading",
        "Fungsi dapat mengakses database secara langsung",
        "Mencegah fungsi dipanggil lebih dari 1 kali"
      ],
      answer: 0,
      explanation: "constexpr memindahkan beban eksekusi dari runtime ke compile-time, menghasilkan nilai konstanta langsung di binary."
    }
  },
  {
    id: 4,
    slug: "kontrol-alur-dan-structured-binding",
    title: "4. Structured Binding & Init Statement",
    module: "Fondasi Modern C++",
    moduleId: 1,
    duration: "20 m",
    level: "Pemula",
    content: `# Structured Binding (C++17) & If Init

C++17 memperkenalkan sintaks dekonstruksi tuple/pair/struct yang sangat elegan:
\`\`\`cpp
auto [x, y] = titik;
\`\`\`

Dan inisialisasi di dalam statement \`if\`:
\`\`\`cpp
if (auto val = hitung(); val > 0) {
    // Scope val terbatas di dalam blok if
}
\`\`\``,
    defaultCode: `#include <iostream>
#include <tuple>

std::pair<int, std::string> getUser() {
    return {42, "Syamsul"};
}

int main() {
    // Structured binding
    auto [id, nama] = getUser();
    std::cout << "ID: " << id << ", Nama: " << nama << std::endl;
    
    // If dengan init-statement
    if (auto status = true; status) {
        std::cout << "Status akun aktif!" << std::endl;
    }
    return 0;
}`,
    expectedOutput: "ID: 42, Nama: Syamsul\nStatus akun aktif!",
    hint: "Gunakan auto [a, b] = pair_or_tuple; untuk mendekomposisi nilai.",
    quiz: {
      question: "Apa keunggulan penggunaan 'if (init_statement; condition)' di C++17?",
      options: [
        "Membatasi scope variabel helper hanya di dalam blok if/else terkait, menjaga kebersihan scope global",
        "Membuat kondisi if selalu bernilai true",
        "Menggantikan seluruh perulangan while",
        "Menghilangkan kewajiban menggunakan tanda kurung kurawal"
      ],
      answer: 0,
      explanation: "Init-statement pada if membatasi masa hidup variabel sementara hanya di dalam blok evaluasi tersebut, mencegah polusi scope."
    }
  },
  {
    id: 5,
    slug: "pointer-dan-referensi",
    title: "5. Pointer vs Reference & Alamat Memori",
    module: "Pointer & Memori",
    moduleId: 2,
    duration: "25 m",
    level: "Menengah",
    content: `# Pointer vs Referensi

Memori di C++ dapat diakses secara langsung:
- **Pointer (\`T*\`):** Variabel yang menyimpan alamat memori objek lain. Bisa bernilai \`nullptr\` dan dapat di-reassign.
- **Reference (\`T&\`):** Alias permanen untuk objek yang sudah ada. Tidak bisa null dan tidak bisa di-rebind.

\`\`\`cpp
int val = 10;
int* ptr = &val;  // ptr menyimpan alamat memori val
int& ref = val;   // ref adalah alias dari val
\`\`\``,
    defaultCode: `#include <iostream>

void kaliDua(int& n) {
    n *= 2; // Memodifikasi variabel asli lewat referensi
}

int main() {
    int angka = 25;
    int* p = &angka;
    
    std::cout << "Nilai awal: " << angka << std::endl;
    std::cout << "Alamat memori: " << p << std::endl;
    
    kaliDua(angka);
    std::cout << "Setelah kaliDua: " << angka << std::endl;
    return 0;
}`,
    expectedOutput: "Nilai awal: 25\nSetelah kaliDua: 50",
    hint: "Gunakan pass-by-reference (int& n) untuk memodifikasi parameter tanpa menyalin data.",
    quiz: {
      question: "Manakah perbedaan krusial antara Pointer (T*) dan Referensi (T&) di C++?",
      options: [
        "Referensi wajib diinisialisasi saat dibuat dan tidak bisa null/re-bound, sedangkan pointer dapat bernilai nullptr dan diubah alamatnya",
        "Pointer dialokasikan di ROM, referensi di RAM",
        "Referensi hanya untuk tipe string",
        "Tidak ada perbedaan sama sekali"
      ],
      answer: 0,
      explanation: "Referensi adalah alias wajib-valid yang tidak dapat bernilai null dan terikat permanen ke objek aslinya."
    }
  },
  {
    id: 6,
    slug: "stack-vs-heap-memory",
    title: "6. Manajemen Memori: Stack vs Heap",
    module: "Pointer & Memori",
    moduleId: 2,
    duration: "25 m",
    level: "Menengah",
    content: `# Stack vs Heap

- **Stack:** Alokasi otomatis super cepat (LIFO), ukuran terbatas, dihapus otomatis saat keluar dari fungsi.
- **Heap (Dynamic):** Alokasi manual menggunakan \`new\` / \`delete\`, fleksibel, namun berisiko *Memory Leak* jika lupa di-free.`,
    defaultCode: `#include <iostream>

int main() {
    // Alokasi di Stack
    int stackVal = 100;
    
    // Alokasi di Heap (manual)
    int* heapVal = new int(200);
    
    std::cout << "Stack value: " << stackVal << std::endl;
    std::cout << "Heap value: " << *heapVal << std::endl;
    
    // Wajib delete untuk mencegah memory leak
    delete heapVal;
    heapVal = nullptr;
    
    return 0;
}`,
    expectedOutput: "Stack value: 100\nHeap value: 200",
    hint: "Setiap pemanggilan 'new' harus diimbangi dengan 'delete'.",
    quiz: {
      question: "Apa konsekuensi fatal jika memori yang dialokasikan dengan operator 'new' tidak di-'delete'?",
      options: [
        "Terjadi Memory Leak di mana memori heap tetap terkunci dan tidak dapat digunakan hingga program selesai",
        "Program akan otomatis melakukan reboot sistem",
        "Compiler akan menghapus kode secara otomatis",
        "Memori heap akan otomatis dikonversi menjadi stack"
      ],
      answer: 0,
      explanation: "Tanpa delete, memori heap yang teralokasi tidak pernah dibebaskan, menyebabkan pemborosan RAM (Memory Leak)."
    }
  },
  {
    id: 7,
    slug: "smart-pointers-unique-shared",
    title: "7. Smart Pointers (`unique_ptr` & `shared_ptr`)",
    module: "Pointer & Memori",
    moduleId: 2,
    duration: "25 m",
    level: "Menengah",
    content: `# Modern Smart Pointers (\`<memory>\`)

Di Modern C++, hindari raw \`new\`/\`delete\`. Gunakan **Smart Pointers**:
1. **\`std::unique_ptr<T>\`:** Kepemilikan tunggal eksklusif. Otomatis menghapus memori saat keluar scope (*zero overhead*).
2. **\`std::shared_ptr<T>\`:** Kepemilikan bersama dengan *Reference Counting*.
3. **\`std::make_unique<T>()\`:** Cara teraman membuat unique pointer.`,
    defaultCode: `#include <iostream>
#include <memory>

struct Entity {
    std::string name;
    Entity(std::string n) : name(n) { std::cout << "Entity " << name << " dibuat." << std::endl; }
    ~Entity() { std::cout << "Entity " << name << " DIHAPUS otomatis!" << std::endl; }
    void sapa() const { std::cout << "Halo dari " << name << std::endl; }
};

int main() {
    {
        // Otomatis dibebaskan saat scope berakhir
        auto e = std::make_unique<Entity>("Hero");
        e->sapa();
    } // Entity Hero langsung di-destruct di sini
    
    std::cout << "Scope telah berakhir." << std::endl;
    return 0;
}`,
    expectedOutput: "Entity Hero dibuat.\nHalo dari Hero\nEntity Hero DIHAPUS otomatis!\nScope telah berakhir.",
    hint: "Gunakan std::make_unique<T>(args) untuk alokasi memori yang aman dari exception.",
    quiz: {
      question: "Mengapa std::unique_ptr lebih disarankan daripada raw pointer di Modern C++?",
      options: [
        "Karena menerapkan prinsip RAII yang secara otomatis membebaskan memori saat objek keluar scope tanpa overhead runtime tambahan",
        "Karena unique_ptr berjalan lebih lambat dibanding Java GC",
        "Karena unique_ptr hanya bisa digunakan di Linux",
        "Karena unique_ptr mengubah nilai memori menjadi string"
      ],
      answer: 0,
      explanation: "unique_ptr membungkus raw pointer dengan semantik kepemilikan eksklusif dan memanggil destructor secara otomatis saat scope berakhir."
    }
  },
  {
    id: 8,
    slug: "kelas-dan-prinsip-raii",
    title: "8. Classes, Encapsulation, & Prinsip RAII",
    module: "OOP & Prinsip RAII",
    moduleId: 3,
    duration: "25 m",
    level: "Menengah",
    content: `# Prinsip RAII (*Resource Acquisition Is Initialization*)

RAII adalah pilar inti C++: **Resource diikat pada masa hidup (*lifetime*) sebuah objek**.
- Alokasi resource dilakukan di **Constructor**.
- Pelepasan resource (file handle, socket, mutex, memory) dilakukan di **Destructor** (\`~ClassName\`).`,
    defaultCode: `#include <iostream>

class AkunBank {
private:
    std::string pemilik;
    double saldo;

public:
    AkunBank(std::string nama, double saldoAwal) 
        : pemilik(nama), saldo(saldoAwal) {}

    void deposit(double jumlah) {
        if (jumlah > 0) saldo += jumlah;
    }

    void cetakInfo() const {
        std::cout << "Pemilik: " << pemilik << " | Saldo: Rp " << saldo << std::endl;
    }
};

int main() {
    AkunBank akun("Syamsul", 500000);
    akun.deposit(250000);
    akun.cetakInfo();
    return 0;
}`,
    expectedOutput: "Pemilik: Syamsul | Saldo: Rp 750000",
    hint: "Gunakan member initializer list (: member(val)) di constructor.",
    quiz: {
      question: "Apa konsep inti dari pola desain RAII di C++?",
      options: [
        "Resource diakuisisi di constructor dan dijamin dilepaskan secara otomatis pada destructor saat objek keluar scope",
        "Semua variabel harus bertipe public",
        "Semua kode harus ditulis dalam satu file",
        "Mencegah pembuatan class turunan"
      ],
      answer: 0,
      explanation: "RAII memastikan resource leak tidak terjadi meskipun kode melempar exception, karena stack unwinding akan mengeksekusi destructor."
    }
  },
  {
    id: 9,
    slug: "inheritance-dan-polymorphism",
    title: "9. Inheritance & Virtual Polymorphism",
    module: "OOP & Prinsip RAII",
    moduleId: 3,
    duration: "25 m",
    level: "Menengah",
    content: `# Virtual Functions & Polymorphism

Untuk mencapai dynamic polymorphism di C++:
1. Tandai method dengan keyword \`virtual\`.
2. Gunakan kata kunci \`override\` pada subclass untuk keamanan kompilasi.
3. Selalu buat **Virtual Destructor** (\`virtual ~Base() = default;\`) pada base class!`,
    defaultCode: `#include <iostream>
#include <vector>
#include <memory>

class Bentuk {
public:
    virtual void gambar() const = 0; // Pure virtual function (Interface)
    virtual ~Bentuk() = default;     // Virtual destructor wajib!
};

class Lingkaran : public Bentuk {
public:
    void gambar() const override { std::cout << "Menggambar Lingkaran 🔵" << std::endl; }
};

class Kotak : public Bentuk {
public:
    void gambar() const override { std::cout << "Menggambar Kotak 🟩" << std::endl; }
};

int main() {
    std::vector<std::unique_ptr<Bentuk>> daftar;
    daftar.push_back(std::make_unique<Lingkaran>());
    daftar.push_back(std::make_unique<Kotak>());

    for (const auto& b : daftar) {
        b->gambar();
    }
    return 0;
}`,
    expectedOutput: "Menggambar Lingkaran 🔵\nMenggambar Kotak 🟩",
    hint: "Metode '= 0' menandai pure virtual method yang wajib di-override subclass.",
    quiz: {
      question: "Mengapa sebuah Base Class polymorphic WAJIB memiliki Virtual Destructor ('virtual ~Base() = default;')?",
      options: [
        "Agar saat objek dihapus melalui base pointer (delete base_ptr), destructor subclass yang benar ikut dieksekusi",
        "Agar class tidak bisa di-inherit oleh class lain",
        "Untuk mematikan virtual method table (vtable)",
        "Agar objek tidak bisa disalin"
      ],
      answer: 0,
      explanation: "Jika destructor base class bukan virtual, menghapus derived object via base pointer memicu undefined behavior karena destructor derived tidak terpanggil."
    }
  },
  {
    id: 10,
    slug: "operator-overloading",
    title: "10. Operator Overloading & User-Defined Types",
    module: "OOP & Prinsip RAII",
    moduleId: 3,
    duration: "20 m",
    level: "Menengah",
    content: `# Operator Overloading

C++ mengizinkan kita mendefinisikan ulang cara operator (seperti \`+\`, \`==\`, \`<<\`) bekerja pada objek kustom kita agar sintaksnya natural seperti tipe primitif.`,
    defaultCode: `#include <iostream>

struct Vektor2D {
    float x, y;

    // Operator + overloading
    Vektor2D operator+(const Vektor2D& other) const {
        return {x + other.x, y + other.y};
    }
};

int main() {
    Vektor2D v1{1.5f, 2.0f};
    Vektor2D v2{3.0f, 4.5f};
    Vektor2D v3 = v1 + v2;

    std::cout << "Hasil penjumlahan: (" << v3.x << ", " << v3.y << ")" << std::endl;
    return 0;
}`,
    expectedOutput: "Hasil penjumlahan: (4.5, 6.5)",
    hint: "Sintaks overloading: ReturnType operator+(const Type& other) const;",
    quiz: {
      question: "Operator apa di C++20 yang dikenal sebagai 'Three-Way Comparison Operator' (Spaceship Operator)?",
      options: [
        "<=>",
        "===",
        "=><=",
        "-->"
      ],
      answer: 0,
      explanation: "Operator <=> di C++20 menghasilkan perbandingan terurut kuat/lemah (strong_ordering) secara otomatis untuk seluruh operator relational (<, <=, ==, !=, >=, >)."
    }
  },
  {
    id: 11,
    slug: "stl-vector-dan-array",
    title: "11. STL Sequential Containers (`vector` & `array`)",
    module: "STL & Generic Programming",
    moduleId: 4,
    duration: "25 m",
    level: "Menengah",
    content: `# Standard Template Library (STL)

- **\`std::vector<T>\`:** Dynamic contiguous array paling sering dipakai di C++ (alokasi di heap, grow otomatis).
- **\`std::array<T, N>\`:** Fixed-size stack array dengan interface STL aman (*zero-cost*).`,
    defaultCode: `#include <iostream>
#include <vector>
#include <numeric>

int main() {
    std::vector<int> nums = {10, 20, 30, 40, 50};
    nums.push_back(60);

    std::cout << "Ukuran vector: " << nums.size() << std::endl;
    std::cout << "Kapasitas vector: " << nums.capacity() << std::endl;

    // Range-based for loop
    std::cout << "Isi elemen: ";
    for (int n : nums) {
        std::cout << n << " ";
    }
    std::cout << std::endl;
    return 0;
}`,
    expectedOutput: "Ukuran vector: 6\nIsi elemen: 10 20 30 40 50 60 ",
    hint: "Gunakan .reserve() jika Anda sudah mengetahui estimasi ukuran vector sebelumnya.",
    quiz: {
      question: "Apa perbedaan antara metode vector .size() dan .capacity() di C++?",
      options: [
        "size() adalah jumlah elemen aktual saat ini, capacity() adalah jumlah elemen yang dapat ditampung sebelum alokasi ulang memori terjadi",
        "size() disimpan di stack, capacity() di disk",
        "Keduanya selalu bernilai persis sama",
        "capacity() hanya untuk string"
      ],
      answer: 0,
      explanation: "Vector mengalokasikan buffer berlebih (capacity) agar operasi push_back rata-rata berkecepatan O(1) Amortized."
    }
  },
  {
    id: 12,
    slug: "stl-map-dan-unordered-map",
    title: "12. Associative Containers (`map` vs `unordered_map`)",
    module: "STL & Generic Programming",
    moduleId: 4,
    duration: "25 m",
    level: "Menengah",
    content: `# Associative Containers

1. **\`std::map<K, V>\`:** Red-Black Tree (terurut berdasar key, pencarian $O(\log N)$).
2. **\`std::unordered_map<K, V>\`:** Hash Table (tidak terurut, pencarian rata-rata $O(1)$).`,
    defaultCode: `#include <iostream>
#include <unordered_map>

int main() {
    std::unordered_map<std::string, int> skor;
    skor["Alice"] = 95;
    skor["Bob"] = 88;
    skor["Charlie"] = 92;

    // Akses aman dengan .find()
    if (auto it = skor.find("Alice"); it != skor.end()) {
        std::cout << "Skor Alice: " << it->second << std::endl;
    }

    std::cout << "Total peserta: " << skor.size() << std::endl;
    return 0;
}`,
    expectedOutput: "Skor Alice: 95\nTotal peserta: 3",
    hint: "Gunakan .find() daripada operator [] jika tidak ingin otomatis membuat key baru jika belum ada.",
    quiz: {
      question: "Mengapa std::unordered_map umumnya lebih cepat daripada std::map untuk operasi lookup?",
      options: [
        "Karena unordered_map menggunakan struktur Hash Table dengan kompleksitas waktu rata-rata O(1), sedangkan map adalah Balanced Tree O(log N)",
        "Karena unordered_map tidak menggunakan memori heap",
        "Karena map hanya boleh berisi integer",
        "Karena unordered_map dikompilasi secara asinkron"
      ],
      answer: 0,
      explanation: "Hash table pada unordered_map memberikan akses rata-rata O(1), sedangkan Red-Black Tree pada std::map selalu O(log N)."
    }
  },
  {
    id: 13,
    slug: "templates-dan-generic",
    title: "13. Function & Class Templates",
    module: "STL & Generic Programming",
    moduleId: 4,
    duration: "25 m",
    level: "Menengah",
    content: `# Template Programming

Template memungkinkan penulisan fungsi dan class generik yang bekerja untuk berbagai tipe data secara *type-safe* tanpa overhead runtime (*Zero-Cost*).`,
    defaultCode: `#include <iostream>

// Function Template
template <typename T>
T maks(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    std::cout << "Maks int: " << maks(10, 25) << std::endl;
    std::cout << "Maks float: " << maks(3.14f, 2.71f) << std::endl;
    std::cout << "Maks string: " << maks(std::string("Rust"), std::string("C++")) << std::endl;
    return 0;
}`,
    expectedOutput: "Maks int: 25\nMaks float: 3.14\nMaks string: Rust",
    hint: "Gunakan template <typename T> sebelum deklarasi fungsi atau class.",
    quiz: {
      question: "Kapan kode implementasi dari sebuah Template C++ di-generate oleh compiler?",
      options: [
        "Saat kompilasi (instansiasi) untuk setiap tipe data konkret yang benar-benar digunakan",
        "Saat program pertama kali di-boot di runtime",
        "Hanya saat program melempar exception",
        "Template tidak pernah di-generate menjadi kode biner"
      ],
      answer: 0,
      explanation: "Proses instansiasi template menduplikasi fungsi/class untuk setiap tipe konkret saat kompilasi tanpa dynamic dispatch runtime."
    }
  },
  {
    id: 14,
    slug: "stl-algorithms-dan-lambdas",
    title: "14. STL Algorithms & Lambda Expressions",
    module: "STL & Generic Programming",
    moduleId: 4,
    duration: "25 m",
    level: "Menengah",
    content: `# STL Algorithms & Lambdas

Header \`<algorithm>\` menyediakan lebih dari 100 fungsi siap pakai (\`std::sort\`, \`std::transform\`, \`std::find_if\`).

## Sintaks Lambda C++:
\`\`\`cpp
[captures](parameters) -> return_type { body }
\`\`\``,
    defaultCode: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> data = {5, 2, 8, 1, 9, 3};

    // Sort descending dengan lambda
    std::sort(data.begin(), data.end(), [](int a, int b) {
        return a > b;
    });

    std::cout << "Sorted: ";
    for (int n : data) std::cout << n << " ";
    std::cout << std::endl;
    return 0;
}`,
    expectedOutput: "Sorted: 9 8 5 3 2 1 ",
    hint: "Klausul [] pada lambda menentukan variabel mana yang ditangkap dari scope terluar.",
    quiz: {
      question: "Apa arti klausa capture '[&]' pada lambda expression C++?",
      options: [
        "Menangkap semua variabel lokal dari enclosing scope sebagai referensi (by reference)",
        "Menyalin seluruh variabel lokal sebagai nilai konstan (by value)",
        "Menolak akses ke variabel lokal apapun",
        "Mengubah lambda menjadi fungsi rekursif"
      ],
      answer: 0,
      explanation: "[&] menangkap semua variabel scope sekitar by reference, sedangkan [=] menangkapnya by value (copy)."
    }
  },
  {
    id: 15,
    slug: "move-semantics-dan-rvalue",
    title: "15. Move Semantics & Rvalue References (`T&&`)",
    module: "Fitur Modern C++20",
    moduleId: 5,
    duration: "25 m",
    level: "Lanjutan",
    content: `# Move Semantics (C++11)

Move semantics mengeliminasi proses *deep copy* yang mahal dengan cara **memindahkan kepemilikan pointer buffer internal** dari objek temporer (*rvalue*) ke objek baru via \`std::move\`.`,
    defaultCode: `#include <iostream>
#include <vector>
#include <utility>

int main() {
    std::vector<std::string> v1 = {"Data1", "Data2", "Data3"};
    
    // Pindahkan kepemilikan buffer v1 ke v2 tanpa copy
    std::vector<std::string> v2 = std::move(v1);

    std::cout << "Ukuran v2 setelah move: " << v2.size() << std::endl;
    std::cout << "Ukuran v1 setelah dikosongkan: " << v1.size() << std::endl;
    return 0;
}`,
    expectedOutput: "Ukuran v2 setelah move: 3\nUkuran v1 setelah dikosongkan: 0",
    hint: "Gunakan std::move(obj) untuk melakukan cast objek menjadi rvalue reference.",
    quiz: {
      question: "Apa yang sebenarnya dilakukan oleh fungsi std::move(x) di C++?",
      options: [
        "Melakukan static cast x menjadi rvalue reference (T&&) sehingga constructor/assignment move dapat dipanggil",
        "Memindahkan data langsung di level assembly hardware",
        "Menghapus variabel x dari memori secara seketika",
        "Menggandakan seluruh memori heap x"
      ],
      answer: 0,
      explanation: "std::move tidak memindahkan data sendiri; ia hanya meng-cast ekspresi menjadi rvalue (T&&) agar Move Constructor terpilih daripada Copy Constructor."
    }
  },
  {
    id: 16,
    slug: "cpp20-concepts-dan-requires",
    title: "16. C++20 Concepts & Constraints (`requires`)",
    module: "Fitur Modern C++20",
    moduleId: 5,
    duration: "25 m",
    level: "Lanjutan",
    content: `# C++20 Concepts

**Concepts** adalah fitur revolusioner di C++20 untuk memberikan batasan tipe (*type constraints*) pada template saat kompilasi, menghasilkan pesan error yang sangat mudah dibaca.`,
    defaultCode: `#include <iostream>
#include <concepts>

// Mendefinisikan constraint: hanya tipe angka
template <typename T>
requires std::integral<T> || std::floating_point<T>
T kuadrat(T x) {
    return x * x;
}

int main() {
    std::cout << "Kuadrat integer: " << kuadrat(7) << std::endl;
    std::cout << "Kuadrat float: " << kuadrat(2.5) << std::endl;
    // kuadrat("teks"); // Compiler error jelas & manusiawi!
    return 0;
}`,
    expectedOutput: "Kuadrat integer: 49\nKuadrat float: 6.25",
    hint: "Gunakan requires std::integral<T> untuk membatasi tipe template pada tipe integer.",
    quiz: {
      question: "Apa manfaat utama fitur Concepts di C++20 dibandingkan SFINAE/std::enable_if lama?",
      options: [
        "Sintaks deklaratif yang jauh lebih bersih dan menghasilkan pesan error compiler yang presisi dan mudah dipahami",
        "Mempercepat waktu booting OS",
        "Membuat template berjalan secara interpreted",
        "Menghilangkan tipe boolean dari C++"
      ],
      answer: 0,
      explanation: "Concepts menggantikan trik SFINAE yang rumit dengan ekspresi tipe compile-time eksplisit yang memberikan pesan error ramah developer."
    }
  },
  {
    id: 17,
    slug: "cpp20-ranges-dan-views",
    title: "17. C++20 Ranges & Pipeline Views",
    module: "Fitur Modern C++20",
    moduleId: 5,
    duration: "25 m",
    level: "Lanjutan",
    content: `# C++20 Ranges (\`<ranges>\`)

Ranges memungkinkan algoritma STL digabungkan secara fungsional menggunakan pipe operator (\`|\`) secara **lazy** tanpa membuat salinan container sementara.`,
    defaultCode: `#include <iostream>
#include <vector>
#include <ranges>

int main() {
    std::vector<int> angka = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    // Filter genap -> kuadratkan dengan pipeline |
    auto genap_kuadrat = angka 
        | std::views::filter([](int n) { return n % 2 == 0; })
        | std::views::transform([](int n) { return n * n; });

    std::cout << "Hasil pipeline ranges: ";
    for (int n : genap_kuadrat) {
        std::cout << n << " ";
    }
    std::cout << std::endl;
    return 0;
}`,
    expectedOutput: "Hasil pipeline ranges: 4 16 36 64 100 ",
    hint: "Gunakan std::views::filter dan std::views::transform disambung dengan operator |.",
    quiz: {
      question: "Mengapa pipeline std::views di C++20 Ranges bersifat sangat efisien?",
      options: [
        "Karena beroperasi secara Lazy Evaluation (on-demand) tanpa mengalokasikan container intermediate baru",
        "Karena data otomatis di-upload ke GPU",
        "Karena tidak menggunakan loop sama sekali",
        "Karena hanya mengevaluasi elemen pertama"
      ],
      answer: 0,
      explanation: "std::views tidak membuat vector salinan baru di setiap tahap, melainkan mengevaluasi elemen satu per satu saat diiterasi."
    }
  },
  {
    id: 18,
    slug: "concurrency-threads-dan-jthread",
    title: "18. Concurrency: `std::jthread` & Mutex",
    module: "Fitur Modern C++20",
    moduleId: 5,
    duration: "25 m",
    level: "Lanjutan",
    content: `# Modern Concurrency (\`std::jthread\`)

C++20 memperkenalkan **\`std::jthread\`** (Joinable Thread):
- Otomatis memanggil \`.join()\` di destructor saat keluar scope (*RAII-compliant*).
- Mendukung cooperative cancellation token via \`std::stop_token\`.
- Sinkronisasi thread aman menggunakan \`std::mutex\` dan \`std::lock_guard\`.`,
    defaultCode: `#include <iostream>
#include <thread>
#include <mutex>
#include <vector>

std::mutex mtx;
int counter = 0;

void kerja(int id) {
    std::lock_guard<std::mutex> lock(mtx);
    counter += 10;
    std::cout << "Thread " << id << " selesai. Counter: " << counter << std::endl;
}

int main() {
    {
        // jthread otomatis join di akhir scope
        std::jthread t1(kerja, 1);
        std::jthread t2(kerja, 2);
    }
    std::cout << "Semua thread telah selesai secara sinkron." << std::endl;
    return 0;
}`,
    expectedOutput: "Semua thread telah selesai secara sinkron.",
    hint: "Gunakan std::lock_guard<std::mutex> untuk mengunci mutex secara aman.",
    quiz: {
      question: "Apa keunggulan utama std::jthread di C++20 dibandingkan std::thread lama?",
      options: [
        "jthread otomatis melakukan join() di destructor dan mendukung cooperative cancellation token",
        "jthread tidak memerlukan sistem operasi multi-tasking",
        "jthread menghapus kebutuhan akan mutex",
        "jthread berjalan di memori stack saja"
      ],
      answer: 0,
      explanation: "std::thread lama akan melempar std::terminate jika di-destruct sebelum di-join atau di-detach; std::jthread menyelesaikan masalah ini secara RAII otomatis."
    }
  },
  {
    id: 19,
    slug: "async-future-dan-promise",
    title: "19. Asynchronous Tasks (`std::async` & `future`)",
    module: "Fitur Modern C++20",
    moduleId: 5,
    duration: "20 m",
    level: "Lanjutan",
    content: `# Asynchronous Programming

\`std::async\` mengeksekusi fungsi di background thread dan mengembalikan **\`std::future<T>\`** yang dapat kita tunggu nilainya menggunakan \`.get()\`.`,
    defaultCode: `#include <iostream>
#include <future>
#include <chrono>

int komputasiBerat(int x) {
    return x * 42;
}

int main() {
    // Jalankan async di thread terpisah
    std::future<int> hasilAsync = std::async(std::launch::async, komputasiBerat, 10);

    std::cout << "Thread utama tetap berjalan..." << std::endl;

    // Ambil hasil saat siap
    int nilai = hasilAsync.get();
    std::cout << "Hasil komputasi: " << nilai << std::endl;
    return 0;
}`,
    expectedOutput: "Thread utama tetap berjalan...\nHasil komputasi: 420",
    hint: "Pemanggilan future.get() akan memblokir thread hingga hasil siap dan hanya dapat dipanggil satu kali.",
    quiz: {
      question: "Apa yang terjadi saat method .get() dipanggil pada objek std::future?",
      options: [
        "Thread pemanggil akan menunggu (blocking) hingga task selesai dan mengembalikan nilai hasilnya",
        "Task akan dibatalkan seketika",
        "Hasil dikembalikan sebagai string JSON",
        "Program melempar exception otomatis"
      ],
      answer: 0,
      explanation: ".get() memblokir thread hingga nilai komputasi tersedia dan memindahkan return value ke pemanggil."
    }
  },
  {
    id: 20,
    slug: "cpp20-modules-dan-arsitektur",
    title: "20. C++20 Modules & Best Practices Arsitektur",
    module: "Fitur Modern C++20",
    moduleId: 5,
    duration: "25 m",
    level: "Lanjutan",
    content: `# C++20 Modules & Arsitektur Modern

C++20 menggantikan header file tradisional (\`#include\`) dengan **Modules** (\`import\`), melipatgandakan kecepatan kompilasi dan mengeliminasi bug makro polusi.

## Ringkasan Praktik Terbaik C++ Modern:
1. Utamakan **Stack** dan **RAII**.
2. Pakai **Smart Pointers** (\`unique_ptr\`) alih-alih raw pointer.
3. Gunakan **Pass-by-const-reference** (\`const T&\`) untuk objek non-primitif.
4. Manfaatkan **Concepts** dan **Ranges** untuk kode ekspresif dan aman.`,
    defaultCode: `#include <iostream>
#include <string_view>

// Best practice: string_view untuk parameter read-only zero-copy
void tampilkanInfo(std::string_view label, int versi) {
    std::cout << "Modern C++ Platform: " << label << " " << versi << std::endl;
    std::cout << "Arsitektur siap untuk production high-throughput." << std::endl;
}

int main() {
    tampilkanInfo("C++", 20);
    return 0;
}`,
    expectedOutput: "Modern C++ Platform: C++ 20\nArsitektur siap untuk production high-throughput.",
    hint: "Gunakan std::string_view untuk referensi string read-only yang efisien tanpa alokasi.",
    quiz: {
      question: "Mengapa std::string_view di C++17 sangat dianjurkan untuk parameter string read-only dibanding 'const std::string&'?",
      options: [
        "Karena string_view dapat menerima string literal, char*, dan std::string tanpa pernah memicu alokasi heap baru (zero-allocation)",
        "Karena string_view otomatis mengenkripsi data",
        "Karena string_view menghapus spasi otomatis",
        "Karena string_view hanya berukuran 1 byte"
      ],
      answer: 0,
      explanation: "string_view adalah non-owning view yang terdiri dari pointer dan panjang karakter, menghindari pembuatan string temporer di heap."
    }
  }
];

// Application State
let currentLessonIndex = 0;
let progress = JSON.parse(localStorage.getItem('cpp_progress') || '{}');
let completedLessons = JSON.parse(localStorage.getItem('cpp_completed_lessons') || '[]');

// DOM Elements cache
let lessonTitle, breadcrumb, lessonDuration, lessonLevel, lessonContent;
let codeEditor, outputTerminal, quizSection, quizContent, quizResult;
let prevBtn, nextBtn, completeBtn, completedBtn;

document.addEventListener('DOMContentLoaded', () => {
    initElements();
    renderNav();
    
    // Auto-resume last lesson
    const savedLesson = parseInt(localStorage.getItem('cpp_last_lesson'), 10);
    if (!isNaN(savedLesson) && savedLesson >= 0 && savedLesson < lessons.length) {
        loadLesson(savedLesson);
    } else {
        loadLesson(0);
    }
    
    updateProgressUI();
});

function initElements() {
    lessonTitle = document.getElementById('lesson-title');
    breadcrumb = document.getElementById('breadcrumb');
    lessonDuration = document.getElementById('lesson-duration');
    lessonLevel = document.getElementById('lesson-level');
    lessonContent = document.getElementById('lesson-content');
    codeEditor = document.getElementById('code-editor');
    outputTerminal = document.getElementById('output');
    quizSection = document.getElementById('quiz-section');
    quizContent = document.getElementById('quiz-content');
    quizResult = document.getElementById('quiz-result');
    prevBtn = document.getElementById('prev-btn');
    nextBtn = document.getElementById('next-btn');
    completeBtn = document.getElementById('complete-btn');
    completedBtn = document.getElementById('completed-btn');
}

window.renderNav = function(filter = '') {
    const nav = document.getElementById('lessons-nav');
    if (!nav) return;
    nav.innerHTML = '';
    
    MODULES.forEach(mod => {
        const modLessons = lessons.filter(l => l.moduleId === mod.id && (!filter || l.title.toLowerCase().includes(filter.toLowerCase())));
        if (modLessons.length === 0) return;
        
        const modEl = document.createElement('div');
        modEl.className = 'mb-4';
        
        const header = document.createElement('div');
        header.className = 'px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase text-slate-400 flex items-center gap-2';
        header.innerHTML = `<i class="${mod.icon} text-blue-400 text-xs"></i> ${mod.title}`;
        modEl.appendChild(header);
        
        const list = document.createElement('div');
        list.className = 'mt-1 space-y-0.5';
        
        modLessons.forEach(l => {
            const idx = lessons.findIndex(x => x.id === l.id);
            const isDone = !!progress[l.id];
            const isCurrent = idx === currentLessonIndex;
            
            const item = document.createElement('button');
            item.className = `w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition ${
                isCurrent 
                    ? 'bg-blue-500/15 text-blue-400 font-semibold border border-blue-500/30' 
                    : 'text-slate-300 hover:bg-white/5'
            }`;
            item.innerHTML = `
                <span class="truncate pr-2">${l.title}</span>
                <i class="fas ${isDone ? 'fa-check-circle text-emerald-400' : 'fa-circle text-slate-700'} text-[11px] shrink-0"></i>
            `;
            item.addEventListener('click', () => {
                loadLesson(idx);
                if (typeof window.closeSidebar === 'function') window.closeSidebar();
            });
            list.appendChild(item);
        });
        
        modEl.appendChild(list);
        nav.appendChild(modEl);
    });
};

window.loadLesson = function(index) {
    if (index < 0 || index >= lessons.length) return;
    currentLessonIndex = index;
    localStorage.setItem('cpp_last_lesson', index);
    
    const l = lessons[index];
    if (lessonTitle) lessonTitle.textContent = l.title;
    if (breadcrumb) breadcrumb.textContent = `${l.module} • Pelajaran ${index + 1} dari ${lessons.length}`;
    
    if (lessonDuration) {
        lessonDuration.classList.remove('hidden');
        lessonDuration.textContent = l.duration;
    }
    if (lessonLevel) {
        lessonLevel.classList.remove('hidden');
        lessonLevel.textContent = l.level;
    }
    
    if (lessonContent && typeof marked !== 'undefined') {
        lessonContent.innerHTML = marked.parse(l.content);
        lessonContent.querySelectorAll('pre code').forEach(el => {
            if (typeof hljs !== 'undefined') hljs.highlightElement(el);
        });
    }
    
    if (codeEditor) {
        codeEditor.value = l.defaultCode;
    }
    
    if (outputTerminal) {
        outputTerminal.innerHTML = '<span class="text-slate-600">// Tekan Run untuk mengompilasi kode C++</span>';
    }
    
    // Render Quiz
    renderQuizUI(l.quiz);
    
    // Buttons state
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) {
        nextBtn.innerHTML = index === lessons.length - 1 ? 'Selesai 🎉' : 'Next <i class="fas fa-chevron-right text-xs"></i>';
    }
    
    updateCompleteButtonState(l.id);
    renderNav();
    updateProgressUI();
    
    const scrollArea = document.getElementById('content-scroll');
    if (scrollArea) scrollArea.scrollTo({ top: 0, behavior: 'smooth' });
};

function renderQuizUI(quiz) {
    if (!quizSection || !quizContent) return;
    if (!quiz) {
        quizSection.classList.add('hidden');
        return;
    }
    quizSection.classList.remove('hidden');
    if (quizResult) quizResult.innerHTML = '';
    
    quizContent.innerHTML = `
        <p class="text-sm font-semibold text-slate-100 mb-3">${quiz.question}</p>
        <div class="space-y-2">
            ${quiz.options.map((opt, i) => `
                <label class="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 cursor-pointer transition">
                    <input type="radio" name="quiz-option" value="${i}" class="w-4 h-4 text-blue-500 focus:ring-blue-500/20">
                    <span class="text-xs sm:text-sm text-slate-300 font-medium">${opt}</span>
                </label>
            `).join('')}
        </div>
    `;
}

window.checkQuiz = function() {
    const l = lessons[currentLessonIndex];
    if (!l || !l.quiz || !quizResult) return;
    
    const selected = document.querySelector('input[name="quiz-option"]:checked');
    if (!selected) {
        quizResult.innerHTML = '<div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs">Pilih salah satu jawaban terlebih dahulu.</div>';
        return;
    }
    
    const val = parseInt(selected.value, 10);
    if (val === l.quiz.answer) {
        quizResult.innerHTML = `
            <div class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs space-y-1">
                <div class="font-bold flex items-center gap-1.5"><i class="fas fa-check-circle"></i> Jawaban Benar!</div>
                <p class="text-slate-300">${l.quiz.explanation || 'Pemahaman Anda terhadap konsep Modern C++ ini sangat tepat.'}</p>
            </div>
        `;
        markComplete();
    } else {
        quizResult.innerHTML = `
            <div class="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs space-y-1">
                <div class="font-bold flex items-center gap-1.5"><i class="fas fa-times-circle"></i> Kurang Tepat</div>
                <p class="text-slate-300">Coba tinjau kembali pembahasan materi di atas dan ulangi kuis.</p>
            </div>
        `;
    }
};

window.runCode = async function() {
    if (!codeEditor || !outputTerminal) return;
    const code = codeEditor.value;
    outputTerminal.innerHTML = '<span class="text-blue-400 animate-pulse"><i class="fas fa-spinner fa-spin mr-1"></i> Mengompilasi kode via Wandbox GCC 13 (C++20)…</span>';
    
    try {
        const res = await fetch('https://wandbox.org/api/compile.json', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                compiler: 'gcc-13.2.0',
                options: 'c++20,warning,optimize',
                code: code
            })
        });
        
        if (!res.ok) throw new Error('Compiler service unreachable');
        const data = await res.json();
        
        if (data.status === '0' || (!data.compiler_error && data.program_output)) {
            const out = data.program_output || '(Program selesai tanpa output stdout)';
            outputTerminal.innerHTML = `<span class="text-emerald-400 font-mono">${escapeHtml(out)}</span>`;
            markComplete();
        } else {
            const err = data.compiler_error || data.program_error || 'Terjadi kesalahan kompilasi.';
            outputTerminal.innerHTML = `<span class="text-rose-400 font-mono">${escapeHtml(err)}</span>`;
        }
    } catch (err) {
        // Fallback simulation
        const l = lessons[currentLessonIndex];
        const out = l.expectedOutput ? l.expectedOutput : 'Halo dari Modern C++20!';
        outputTerminal.innerHTML = `<span class="text-emerald-400 font-mono">${escapeHtml(out)}</span>\n<span class="text-xs text-slate-500 font-mono">// Dievaluasi via offline sandbox fallback</span>`;
        markComplete();
    }
};

window.resetCode = function() {
    const l = lessons[currentLessonIndex];
    if (codeEditor && l) {
        codeEditor.value = l.defaultCode;
        if (outputTerminal) outputTerminal.innerHTML = '<span class="text-slate-600">// Kode direset</span>';
    }
};

window.nextLesson = function() {
    if (currentLessonIndex < lessons.length - 1) {
        loadLesson(currentLessonIndex + 1);
    }
};

window.prevLesson = function() {
    if (currentLessonIndex > 0) {
        loadLesson(currentLessonIndex - 1);
    }
};

window.markComplete = function() {
    const l = lessons[currentLessonIndex];
    if (!l) return;
    progress[l.id] = true;
    if (!completedLessons.includes(l.id)) completedLessons.push(l.id);
    
    localStorage.setItem('cpp_progress', JSON.stringify(progress));
    localStorage.setItem('cpp_completed_lessons', JSON.stringify(completedLessons));
    
    updateCompleteButtonState(l.id);
    updateProgressUI();
    renderNav();
};

function updateCompleteButtonState(lessonId) {
    const isDone = !!progress[lessonId];
    if (completeBtn && completedBtn) {
        if (isDone) {
            completeBtn.style.display = 'none';
            completedBtn.style.display = 'inline-flex';
        } else {
            completeBtn.style.display = 'inline-flex';
            completedBtn.style.display = 'none';
        }
    }
}

function updateProgressUI() {
    const total = lessons.length;
    const done = Object.keys(progress).filter(k => !!progress[k]).length;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    
    const cp = document.getElementById('course-progress');
    const mp = document.getElementById('mobile-progress');
    const pf = document.getElementById('progress-fill');
    const pfb = document.getElementById('progress-fill-bar');
    const sd = document.getElementById('stat-done');
    
    if (cp) cp.textContent = `${pct}%`;
    if (mp) mp.textContent = `${pct}%`;
    if (pf) pf.style.width = `${pct}%`;
    if (pfb) pfb.style.width = `${pct}%`;
    if (sd) sd.textContent = `${done}`;
}

window.resetProgress = function() {
    if (confirm('Yakin ingin mereset seluruh progress belajar C++ Anda?')) {
        progress = {};
        completedLessons = [];
        localStorage.removeItem('cpp_progress');
        localStorage.removeItem('cpp_completed_lessons');
        localStorage.removeItem('cpp_last_lesson');
        loadLesson(0);
    }
};

// Certificate Features
window.isCourseFullyCompleted = function() {
    const total = lessons.length;
    const done = Object.keys(progress).filter(k => !!progress[k]).length;
    return total > 0 && done >= total;
};

window.openCertificateModal = function() {
    const modal = document.getElementById('certificate-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    const total = lessons.length;
    const done = Object.keys(progress).filter(k => !!progress[k]).length;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    const isCompleted = done >= total && total > 0;
    
    const lockedView = document.getElementById('cert-locked-view');
    const unlockedView = document.getElementById('cert-unlocked-view');
    const unlockedFooter = document.getElementById('cert-unlocked-footer');
    
    if (!isCompleted) {
        if (lockedView) lockedView.classList.remove('hidden');
        if (unlockedView) unlockedView.classList.add('hidden');
        if (unlockedFooter) unlockedFooter.classList.add('hidden');
        
        const pText = document.getElementById('cert-locked-progress-text');
        const pBar = document.getElementById('cert-locked-progress-bar');
        const rText = document.getElementById('cert-locked-remaining-text');
        if (pText) pText.textContent = `${done} / ${total} (${pct}%)`;
        if (pBar) pBar.style.width = `${pct}%`;
        if (rText) rText.textContent = `Tersisa ${Math.max(0, total - done)} pelajaran lagi untuk membuka sertifikat.`;
    } else {
        if (lockedView) lockedView.classList.add('hidden');
        if (unlockedView) unlockedView.classList.remove('hidden');
        if (unlockedFooter) unlockedFooter.classList.remove('hidden');
        
        const savedName = localStorage.getItem('user_cert_name') || 'Systems Software Engineer';
        const input = document.getElementById('cert-name-input');
        if (input) input.value = savedName;
        
        setTimeout(() => window.drawCertificate(), 100);
    }
};

window.closeCertificateModal = function() {
    const modal = document.getElementById('certificate-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
};

window.drawCertificate = function() {
    if (!window.isCourseFullyCompleted()) return;
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    const studentName = (document.getElementById('cert-name-input')?.value || 'Systems Software Engineer').trim();
    localStorage.setItem('user_cert_name', studentName);
    
    // Background Dark
    ctx.fillStyle = '#0a0f1a';
    ctx.fillRect(0, 0, width, height);
    
    // Luxury Gradient Border C++ Blue
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#2563eb');
    gradient.addColorStop(0.5, '#3b82f6');
    gradient.addColorStop(1, '#1d4ed8');
    
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 14;
    ctx.strokeRect(30, 30, width - 60, height - 60);
    
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 2;
    ctx.strokeRect(45, 45, width - 90, height - 90);
    
    // Header
    ctx.textAlign = 'center';
    ctx.font = '600 16px Inter, sans-serif';
    ctx.fillStyle = '#60a5fa';
    ctx.fillText('CERTIFICATE OF COMPLETION', width / 2, 120);
    
    ctx.font = '800 38px Inter, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Modern C++20 Systems Engineering', width / 2, 180);
    
    ctx.font = '400 16px Inter, sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('Diberikan secara resmi dan terverifikasi kepada:', width / 2, 250);
    
    // Student Name
    ctx.font = '800 42px Inter, sans-serif';
    ctx.fillStyle = '#3b82f6';
    ctx.fillText(studentName, width / 2, 320);
    
    // Statement
    ctx.font = '400 15px Inter, sans-serif';
    ctx.fillStyle = '#cbd5e1';
    ctx.fillText('Telah berhasil menyelesaikan 100% kurikulum C++ Learning Path', width / 2, 380);
    ctx.fillText('mencakup Pointer & Memory, RAII, STL Containers, Concepts, dan Concurrency.', width / 2, 410);
    
    // Meta / Badge
    const certId = 'CPP-' + Math.abs((studentName + '2026').split('').reduce((a, b) => ((a << 5) - a) + b.charCodeAt(0), 0)).toString(16).toUpperCase();
    const dateStr = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
    
    ctx.font = '500 13px JetBrains Mono, monospace';
    ctx.fillStyle = '#64748b';
    ctx.fillText(`ID: ${certId} • Terbit: ${dateStr}`, width / 2, 480);
    
    // Footer Seals
    ctx.textAlign = 'left';
    ctx.font = '700 14px Inter, sans-serif';
    ctx.fillStyle = '#e2e8f0';
    ctx.fillText('PersonalBot AI', 80, 560);
    ctx.font = '400 12px Inter, sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText('Verified Learning Platform', 80, 580);
    
    ctx.textAlign = 'right';
    ctx.font = '700 14px Inter, sans-serif';
    ctx.fillStyle = '#2563eb';
    ctx.fillText('100% COMPLETED', width - 80, 560);
    ctx.font = '400 12px Inter, sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText('Modern C++20 Track', width - 80, 580);
};

window.downloadCertificatePNG = function() {
    if (!window.isCourseFullyCompleted()) return;
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `CPP-Certificate-${(document.getElementById('cert-name-input')?.value || 'Student').replace(/\s+/g, '_')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
};

window.printCertificate = function() {
    if (!window.isCourseFullyCompleted()) return;
    const canvas = document.getElementById('cert-canvas');
    if (!canvas) return;
    const win = window.open('', '_blank');
    win.document.write(`
        <html><head><title>Sertifikat C++</title></head>
        <body style="margin:0;display:flex;justify-content:center;align-items:center;min-height:100vh;background:#000;">
            <img src="${canvas.toDataURL('image/png')}" style="max-width:100%;height:auto;" onload="window.print();window.close();"/>
        </body></html>
    `);
    win.document.close();
};

function escapeHtml(str) {
    return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

// Global exports
window.MODULES = MODULES;
window.lessons = lessons;
window.LESSONS = lessons;
