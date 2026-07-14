// ===== DATA PRODUK =====
const products = [
    // 1. Sketchbook - 12 varian
    {
        id: 'sketchbook',
        name: 'Buku Sketsa',
        nameEn: 'Sketchbook',
        category: 'paper',
        basePrice: 90000,
        discount: 15,
        rating: 4.8,
        reviews: 124,
        image: 'SketchBook.png',
        images: ['SketchBook.png'],
        description: 'Buku sketsa premium dengan kertas berkualitas tinggi. Cocok untuk berbagai media seperti pensil, tinta, dan cat ringan.',
        descriptionEn: 'Premium sketchbook with high-quality paper. Suitable for various media such as pencils, ink, and light paint.',
        usage: 'Gunakan untuk menggambar sketsa, menulis, atau melukis dengan media kering dan basah.',
        usageEn: 'Use for sketching, writing, or painting with dry and wet media',
        care: 'Simpan di tempat yang kering.',
        careEn: 'Store in a dry place.',
        group: 'sketchbook',
        variants: [
            { label: 'A5 - 100gsm', price: 90000, stock: 72, sku: 'SK-A5-100', weight: '200g', dims: '14.8 x 21 cm' },
            { label: 'A5 - 150gsm', price: 110000, stock: 65, sku: 'SK-A5-150', weight: '250g', dims: '14.8 x 21 cm' },
            { label: 'A5 - 200gsm', price: 130000, stock: 81, sku: 'SK-A5-200', weight: '300g', dims: '14.8 x 21 cm' },
            { label: 'A5 - 300gsm', price: 150000, stock: 42, sku: 'SK-A5-300', weight: '350g', dims: '14.8 x 21 cm' },
            { label: 'A4 - 100gsm', price: 110000, stock: 59, sku: 'SK-A4-100', weight: '250g', dims: '21 x 29.7 cm' },
            { label: 'A4 - 150gsm', price: 130000, stock: 91, sku: 'SK-A4-150', weight: '300g', dims: '21 x 29.7 cm' },
            { label: 'A4 - 200gsm', price: 150000, stock: 74, sku: 'SK-A4-200', weight: '350g', dims: '21 x 29.7 cm' },
            { label: 'A4 - 300gsm', price: 170000, stock: 38, sku: 'SK-A4-300', weight: '400g', dims: '21 x 29.7 cm' },
            { label: 'A3 - 100gsm', price: 135000, stock: 66, sku: 'SK-A3-100', weight: '300g', dims: '29.7 x 42 cm' },
            { label: 'A3 - 150gsm', price: 155000, stock: 74, sku: 'SK-A3-150', weight: '350g', dims: '29.7 x 42 cm' },
            { label: 'A3 - 200gsm', price: 175000, stock: 53, sku: 'SK-A3-200', weight: '400g', dims: '29.7 x 42 cm' },
            { label: 'A3 - 300gsm', price: 195000, stock: 90, sku: 'SK-A3-300', weight: '450g', dims: '29.7 x 42 cm' }
        ]
    },
    // 2. Mechanical Pencil
    {
        id: 'mechanical-pencil',
        name: 'Pensil Mekanik',
        nameEn: 'Mechanical Pencil',
        category: 'drawing',
        basePrice: 155000,
        discount: 0,
        rating: 4.7,
        reviews: 89,
        image: 'MechanicalPencil.png',
        images: ['MechanicalPencil.png'],
        description: 'Pensil mekanik premium dengan berbagai ukuran mata pensil. Cocok untuk detail presisi dan penggunaan sehari-hari.',
        descriptionEn: 'Premium mechanical pencil available in various lead sizes. Suitable for precision detailing and everyday use.',
        usage: 'Gunakan untuk menggambar, menulis, dan ilustrasi teknis.',
        usageEn: 'Use for drawing, writing, and technical illustration.',
        care: 'Simpan dalam tempat pensil dan hindari benturan.',
        careEn: 'Store in a pencil case and avoid impacts.',
        group: 'mechanical',
        variants: [
            { label: '0.3 mm', price: 165000, stock: 64, sku: 'MP-03', weight: '50g', dims: '14 cm' },
            { label: '0.5 mm', price: 155000, stock: 42, sku: 'MP-05', weight: '50g', dims: '14 cm' },
            { label: '0.7 mm', price: 160000, stock: 86, sku: 'MP-07', weight: '50g', dims: '14 cm' },
            { label: '2.0 mm', price: 175000, stock: 93, sku: 'MP-20', weight: '60g', dims: '15 cm' }
        ]
    },
    // 3. Eraser
    {
        id: 'eraser',
        name: 'Penghapus',
        nameEn: 'Eraser',
        category: 'accessories',
        basePrice: 40000,
        discount: 0,
        rating: 4.5,
        reviews: 67,
        image: 'Eraser.png',
        images: ['Eraser.png'],
        description: 'Penghapus berkualitas tinggi yang tidak merusak kertas. Tersedia dalam kemasan satuan dan paket.',
        descriptionEn: 'High-quality eraser that does not damage paper. Available in single packs and multi-packs.',
        usage: 'Gunakan untuk menghapus goresan pensil dengan lembut.',
        usageEn: 'Use it to gently remove pencil marks.',
        care: 'Simpan di tempat yang kering.',
        careEn: 'Store in a dry place.',
        group: 'eraser',
        variants: [
            { label: '1 pcs', price: 40000, stock: 40, sku: 'ER-01', weight: '20g', dims: '5 x 2 cm' },
            { label: '1 pack (12 pcs)', price: 330000, stock: 64, sku: 'ER-12', weight: '200g', dims: '5 x 2 cm' }
        ]
    },
    // 4. Watercolor
    {
        id: 'watercolor',
        name: 'Cat Air',
        nameEn: 'Watercolor',
        category: 'drawing',
        basePrice: 450000,
        discount: 15,
        rating: 4.9,
        reviews: 134,
        image: 'WaterColors.png',
        images: ['WaterColors.png'],
        description: 'Set cat air berkualitas tinggi dengan warna cerah dan pigmentasi kuat. Tersedia dalam berbagai pilihan jumlah warna.',
        descriptionEn: 'A high-quality watercolor set featuring vibrant colors and strong pigmentation. Available in a range of color counts.',
        usage: 'Campur dengan air, lalu aplikasikan pada kertas cat air.',
        usageEn: 'Mix with water, then apply to watercolor paper.',
        care: 'Tutup rapat setelah digunakan dan simpan di tempat sejuk.',
        careEn: 'Close tightly after use and store in a cool place.',
        group: 'watercolor',
        variants: [
            { label: '12 colors', price: 450000, stock: 51, sku: 'WC-12', weight: '300g', dims: '20 x 15 x 3 cm' },
            { label: '16 colors', price: 550000, stock: 63, sku: 'WC-16', weight: '350g', dims: '20 x 15 x 3 cm' },
            { label: '28 colors', price: 705500, stock: 81, sku: 'WC-28', weight: '400g', dims: '25 x 18 x 4 cm' },
            { label: '36 colors', price: 850000, stock: 72, sku: 'WC-36', weight: '450g', dims: '25 x 18 x 4 cm' },
            { label: '48 colors', price: 1100000, stock: 44, sku: 'WC-48', weight: '500g', dims: '30 x 20 x 5 cm' }
        ]
    },
    // 5. Acrylic Paint
    {
        id: 'acrylic',
        name: 'Cat Akrilik',
        nameEn: 'Acrylic Paint',
        category: 'painting',
        basePrice: 320000,
        discount: 0,
        rating: 4.8,
        reviews: 89,
        image: 'AcrylicPaint.png',
        images: ['AcrylicPaint.png'],
        description: 'Cat akrilik berkualitas tinggi dengan warna vibrant dan coverage sempurna. Tahan lama dan mudah digunakan.',
        descriptionEn: 'High-quality acrylic paint with vibrant colors and perfect coverage. Long-lasting and easy to use.',
        usage: 'Gunakan langsung dari tube atau campur dengan air untuk efek transparan.',
        usageEn: 'Use directly from the tube or mix with water for a transparent effect.',
        care: 'Tutup rapat setelah digunakan, bersihkan kuas dengan air.',
        careEn: 'Close tightly after use; clean the brush with water.',
        group: 'acrylic',
        variants: [
            { label: '12 colors', price: 320000, stock: 73, sku: 'AC-12', weight: '350g', dims: '20 x 15 x 3 cm' },
            { label: '16 colors', price: 420000, stock: 47, sku: 'AC-16', weight: '400g', dims: '20 x 15 x 3 cm' },
            { label: '28 colors', price: 550500, stock: 59, sku: 'AC-28', weight: '450g', dims: '25 x 18 x 4 cm' },
            { label: '36 colors', price: 690000, stock: 35, sku: 'AC-36', weight: '500g', dims: '25 x 18 x 4 cm' },
            { label: '48 colors', price: 880000, stock: 61, sku: 'AC-48', weight: '550g', dims: '30 x 20 x 5 cm' }
        ]
    },
    // 6. Canvas
    {
        id: 'canvas',
        name: 'kanvas',
        nameEn: 'Canvas',
        category: 'paper',
        basePrice: 85000,
        discount: 0,
        rating: 4.7,
        reviews: 73,
        image: 'Canvas.png',
        images: ['Canvas.png'],
        description: 'Kanvas berkualitas tinggi untuk lukisan akrilik dan minyak. Tersedia dalam berbagai ukuran.',
        descriptionEn: 'High-quality canvas for acrylic and oil painting. Available in various sizes.',
        usage: 'Gunakan untuk melukis dengan cat minyak atau akrilik.',
        usageEn: 'Use it to paint with oil or acrylic paint.',
        care: 'Simpan di tempat yang kering dan hindari kelembaban.',
        careEn: 'Store in a dry place and avoid moisture.',
        group: 'canvas',
        variants: [
            { label: '15x20 cm', price: 85000, stock: 75, sku: 'CV-1520', weight: '150g', dims: '15 x 20 cm' },
            { label: '25x25 cm', price: 110000, stock: 81, sku: 'CV-2525', weight: '200g', dims: '25 x 25 cm' },
            { label: '25x35 cm', price: 125000, stock: 93, sku: 'CV-2535', weight: '250g', dims: '25 x 35 cm' },
            { label: '40x40 cm', price: 165000, stock: 57, sku: 'CV-4040', weight: '350g', dims: '40 x 40 cm' },
            { label: '60x60 cm', price: 220000, stock: 66, sku: 'CV-6060', weight: '500g', dims: '60 x 60 cm' },
            { label: '50x70 cm', price: 190000, stock: 82, sku: 'CV-5070', weight: '450g', dims: '50 x 70 cm' }
        ]
    },
    // 7. Brush Set
    {
        id: 'brush-set',
        name: 'Kuas Lukis',
        nameEn: 'Brush Set',
        category: 'accessories',
        basePrice: 185000,
        discount: 0,
        rating: 4.7,
        reviews: 88,
        image: 'Brush.png',
        images: ['Brush.png'],
        description: 'Set kuas berkualitas tinggi dengan berbagai ukuran untuk berbagai teknik melukis.',
        descriptionEn: 'A high-quality brush set featuring various sizes for a range of painting techniques.',
        usage: 'Gunakan untuk melukis dengan cat air, akrilik, atau minyak.',
        usageEn: 'Use it to paint with watercolors, acrylics, or oils',
        care: 'Bersihkan dengan air setelah digunakan dan keringkan.',
        careEn: 'Clean with water after use and dry.',
        group: 'brush',
        variants: [
            { label: 'Set of 6', price: 185000, stock: 76, sku: 'BS-6', weight: '100g', dims: '20 x 5 x 2 cm' },
            { label: 'Set of 12', price: 290000, stock: 56, sku: 'BS-12', weight: '150g', dims: '22 x 6 x 3 cm' }
        ]
    },
    // 8. Crayon
    {
        id: 'crayon',
        name: 'Krayon',
        nameEn: 'Crayon',
        category: 'drawing',
        basePrice: 98000,
        discount: 0,
        rating: 4.7,
        reviews: 92,
        image: 'Crayon.png',
        images: ['Crayon.png'],
        description: 'Krayon berkualitas tinggi dengan warna cerah dan mudah digunakan. Cocok untuk anak-anak dan dewasa.',
        descriptionEn: 'High-quality crayons with vibrant colors that are easy to use. Suitable for both children and adults.',
        usage: 'Gunakan untuk menggambar dan mewarnai di atas kertas.',
        usageEn: 'Use it for drawing and coloring on paper.',
        care: 'Simpan di tempat yang sejuk dan hindari panas berlebih.',
        careEn: 'Store in a cool place and avoid excessive heat.',
        group: 'crayon',
        variants: [
            { label: '12 colors', price: 98000, stock: 78, sku: 'CR-12', weight: '200g', dims: '15 x 10 x 3 cm' },
            { label: '16 colors', price: 125000, stock: 96, sku: 'CR-16', weight: '250g', dims: '15 x 10 x 3 cm' },
            { label: '28 colors', price: 160000, stock: 54, sku: 'CR-28', weight: '300g', dims: '18 x 12 x 4 cm' },
            { label: '36 colors', price: 200000, stock: 39, sku: 'CR-36', weight: '350g', dims: '18 x 12 x 4 cm' },
            { label: '48 colors', price: 250000, stock: 75, sku: 'CR-48', weight: '400g', dims: '20 x 14 x 5 cm' }
        ]
    },
    // 9. Colored Pencils
    {
        id: 'colored-pencils',
        name: 'Pensil Warna',
        nameEn: 'Colored Pencils',
        category: 'drawing',
        basePrice: 210000,
        discount: 0,
        rating: 4.8,
        reviews: 103,
        image: 'ColoredPencils.png',
        images: ['ColoredPencils.png'],
        description: 'Pensil warna premium dengan pigmentasi tinggi dan hasil halus. Tersedia dalam berbagai pilihan jumlah warna.',
        descriptionEn: 'Premium colored pencils with high pigmentation and a smooth finish. Available in a range of color set sizes.',
        usage: 'Gunakan untuk mewarnai dengan teknik layering dan blending.',
        usageEn: 'Use for coloring with layering and blending techniques.',
        care: 'Rautkan dengan rautan berkualitas dan simpan di tempat yang kering.',
        careEn: 'Sharpen it with a high-quality sharpener and store it in a dry place.',
        group: 'colored',
        variants: [
            { label: '12 colors', price: 210000, stock: 48, sku: 'CP-12', weight: '250g', dims: '20 x 12 x 3 cm' },
            { label: '16 colors', price: 280000, stock: 64, sku: 'CP-16', weight: '300g', dims: '20 x 12 x 3 cm' },
            { label: '28 colors', price: 370000, stock: 82, sku: 'CP-28', weight: '350g', dims: '22 x 14 x 4 cm' },
            { label: '36 colors', price: 460000, stock: 72, sku: 'CP-36', weight: '400g', dims: '22 x 14 x 4 cm' },
            { label: '48 colors', price: 580000, stock: 51, sku: 'CP-48', weight: '450g', dims: '24 x 16 x 5 cm' }
        ]
    },
    // 10. Palette
    {
        id: 'palette',
        name: 'Palet',
        nameEn: 'Palette',
        category: 'accessories',
        basePrice: 65000,
        discount: 0,
        rating: 4.4,
        reviews: 45,
        image: 'Palette.png',
        images: ['Palette.png'],
        description: 'Palet cat berkualitas tinggi dengan permukaan halus untuk mencampur warna.',
        descriptionEn: 'A high-quality paint palette with a smooth surface for mixing colors.',
        usage: 'Gunakan untuk mencampur cat sebelum diaplikasikan ke kanvas.',
        usageEn: 'Use it to mix paint before applying it to the canvas.',
        care: 'Bersihkan setelah digunakan dengan air hangat.',
        careEn: 'Clean with warm water after use.',
        group: 'palette',
        variants: [
            { label: 'Standard', price: 65000, stock: 74, sku: 'PL-01', weight: '80g', dims: '25 x 15 x 1 cm' }
        ]
    }
];

// ===== TRANSLATIONS =====
const translations = {
    id: {
        navHome: '🏠 Beranda',
        navCatalog: '📦 Katalog',
        navDetail: '📖 Rincian',
        navCheckout: '💳 Checkout',
        navAdmin: '📊 Admin',
        navAbout: 'ℹ️ Tentang',
        navFaq: '❓ FAQ',
        navAccount: 'Akun',
        heroBadge: '🌟 Koleksi Baru 2022',
        heroTitle: 'Wujudkan <span>kreativitas</span> kamu',
        heroDesc: 'Perlengkapan seni premium untuk setiap seniman. Dari buku sketsa hingga cat air, kami memiliki semua yang kamu butuhkan.',
        heroShop: 'Beli Sekarang →',
        heroLearn: 'Pelajari Lebih Lanjut',
        categoriesTitle: '📂 <span class="highlight">Kategori</span> <span class="sub">Pilih sesuai kebutuhan</span>',
        catAll: 'Semua',
        catDrawing: 'Menggambar',
        catPainting: 'Melukis',
        catPaper: 'Kertas',
        catAccessories: 'Aksesoris',
        featuredTitle: '⭐ <span class="highlight">Produk Unggulan</span>',
        newTitle: '🆕 <span class="highlight">Produk Terbaru</span>',
        bestTitle: '🔥 <span class="highlight">Produk Terlaris</span>',
        testimonialTitle: '💬 <span class="highlight">Testimoni</span> <span class="sub">Apa kata mereka</span>',
        viewAll: 'Lihat Semua →',
        testimonial1: 'Kualitas Sketchbooknya bagus banget! Kertasnya tebal dan tidak mudah robek. Barang sesuai gambar dan deskripsi',
        testimonial2: 'Kualitas Penghapusnya Bagus banget! Ngehapus dengan bersih. Recommended bangettt',
        testimonial3: 'Pensil mekaniknya nyaman digenggam, hasil garisnya presisi dan grafitnya tidak mudah patah. Pengirimannya juga cepat!',
        testimonial4: 'Cat Akriliknya bagus banget! warnya nya pekat, hasil lukisku jadi manakjubkan^^',
        roleIllustrator: 'Ilustrator',
        roleArtist: 'Seniman',
        roleArchitect: 'Arsitek',
        roleArtist2: 'Seniman',
        breadcrumbHome: '🏠 Beranda',
        breadcrumbCatalog: 'Katalog',
        breadcrumbCart: 'Keranjang',
        breadcrumbCheckout: 'Checkout',
        catalogTitle: '📦 Katalog Produk',
        filterAll: 'Semua Kategori',
        sortFeatured: 'Terbaru',
        sortPriceAsc: 'Harga Termurah',
        sortPriceDesc: 'Harga Tertinggi',
        sortRating: 'Rating Terbaik',
        loadingMore: 'Memuat lebih banyak produk...',
        checkoutTitle: '💳 Checkout',
        shippingInfo: '📋 Informasi Pengiriman',
        fullName: 'Nama Lengkap',
        phoneNumber: 'Nomor Telepon',
        address: 'Alamat Pengiriman',
        city: 'Kota',
        postalCode: 'Kode Pos',
        paymentMethod: 'Metode Pembayaran',
        paymentBank: '🏦 Transfer Bank',
        paymentVA: '🏧 Virtual Account',
        paymentQRIS: '📱 QRIS',
        paymentEWallet: '💳 E-Wallet',
        paymentCOD: '🚚 COD',
        notes: 'Catatan (Opsional)',
        orderSummary: '🛒 Ringkasan Pesanan',
        shippingCost: 'Ongkos Kirim',
        total: 'Total',
        confirmOrder: '✅ Konfirmasi Pesanan',
        loginTitle: '👤 Login',
        username: 'Nama Pengguna',
        password: 'Kata Sandi',
        loginBtn: 'Login',
        noAccount: 'Belum punya akun? <a onclick="authSwitch()">Daftar</a>',
        memberSince: 'Member since 2022',
        logoutBtn: 'Logout',
        aboutTitle: 'ℹ️ Tentang Sketchyy',
        aboutDesc: 'Sketchyy adalah toko perlengkapan seni premium yang didirikan pada tahun 2022 dengan tujuan untuk menyediakan alat-alat berkualitas tinggi bagi para seniman, ilustrator, dan pecinta seni. Kami percaya bahwa setiap orang memiliki bakat seni yang luar biasa, dan kami hadir untuk membantu mewujudkannya dengan produk-produk terbaik dari berbagai merek ternama dunia.',
        mission: 'Misi',
        missionDesc: 'Menyediakan alat seni berkualitas',
        vision: 'Visi',
        visionDesc: 'Menjadi destinasi utama para seniman',
        values: 'Nilai',
        valuesDesc: 'Kualitas, Integritas, dan Pelayanan terbaik',
        contactTitle: '📞 Kontak Kami',
        faqTitle: '❓ Pertanyaan umum seputar produk',
        faq1q: 'Bagaimana cara memesan produk?',
        faq1a: 'Kamu dapat memilih produk yang diinginkan, klik "Tambah ke Keranjang", lalu lanjutkan ke halaman Checkout untuk mengisi data pengiriman dan melakukan pembayaran.',
        faq2q: 'Apakah ada garansi untuk produk?',
        faq2a: 'Ya, semua produk kami memiliki garansi 30 hari untuk kerusakan produk yang disebabkan oleh cacat pabrik.',
        faq3q: 'Berapa lama proses pengiriman?',
        faq3a: 'Pengiriman biasanya memakan waktu 2-5 hari kerja tergantung lokasi pengiriman.',
        faq4q: 'Apakah bisa retur barang?',
        faq4a: 'Ya, Kamu dapat mengembalikan barang dalam waktu 14 hari setelah penerimaan dengan syarat produk tidak rusak dan masih dalam kemasan asli.',
        cartTitle: '🛍️ Keranjang Belanja',
        emptyCart: 'Keranjang masih kosong',
        emptyCartSub: 'Yuk, belanja dulu!',
        clearCart: 'Kosongkan',
        checkoutBtn: 'Checkout →',
        addToCart: '+ Tambah ke Keranjang',
        buyNow: 'Beli Sekarang',
        inStock: 'Tersedia',
        limitedStock: 'Stok Terbatas',
        outOfStock: 'Habis',
        adminAccessDenied: 'Akses Ditolak',
        adminLoginRequired: 'Silakan login terlebih dahulu untuk mengakses dashboard admin.',
        adminStats: '📊 Dashboard Admin',
        totalRevenue: 'Total Pendapatan',
        totalOrders: 'Total Pesanan',
        productsSold: 'Produk Terjual',
        totalCustomers: 'Pelanggan',
        revenueChart: '📈 Grafik Pendapatan (Bulan Ini)',
        orderId: 'ID Pesanan',
        customer: 'Pelanggan',
        status: 'Status',
        date: 'Tanggal',
        delivered: 'Terkirim',
        processing: 'Pemrosesan',
        shipped: 'Dikirim',
        productName: 'Nama Produk',
        category: 'Kategori',
        price: 'Harga',
        stock: 'Stok',
        available: 'Tersedia',
        limited: 'Stok Terbatas',
        empty: 'Habis',
        orderSuccess: '🎉 Pesanan Berhasil!',
        orderNumberLabel: 'Nomor Pesanan',
        orderThankYou: 'Terima kasih telah berbelanja di Sketchyy! ✨',
        backToHome: 'Kembali ke Beranda',
        selectVariant: 'Pilih Varian',
        fullDescription: '📖 Deskripsi Lengkap',
        howToUse: '🎯 Cara Penggunaan',
        careInstructions: '🧼 Cara Perawatan',
        frequentlyBought: '🔄 Sering dibeli bersamaan',
        relatedProducts: '📦 Produk Terkait',
        reviews: 'ulasan',
        remaining: 'tersisa',
        variant: 'Varian',
        size: 'Ukuran',
        thickness: 'Ketebalan Kertas',
        colors: 'Warna',
        set: 'Set',
        stockManagement: '📦 Manajemen Stok',
        updateStock: 'Perbarui Stok',
        currentStock: 'Stok Saat Ini',
        addStock: 'Tambah Stok',
        reduceStock: 'Kurangi Stok',
        setStock: 'Atur Stok'
    },
    en: {
        navHome: '🏠 Home',
        navCatalog: '📦 Catalog',
        navDetail: '📖 Detail',
        navCheckout: '💳 Checkout',
        navAdmin: '📊 Admin',
        navAbout: 'ℹ️ About',
        navFaq: '❓ FAQ',
        navAccount: 'Account',
        heroBadge: '🌟 New Collection 2022',
        heroTitle: 'Bring Your <span>Creativity</span> to Life',
        heroDesc: 'Premium art supplies for every artist. From sketchbooks to watercolors, we have everything you need.',
        heroShop: 'Shop Now →',
        heroLearn: 'Learn More',
        categoriesTitle: '📂 <span class="highlight">Categories</span> <span class="sub">Choose your needs</span>',
        catAll: 'All',
        catDrawing: 'Drawing',
        catPainting: 'Painting',
        catPaper: 'Paper',
        catAccessories: 'Accessories',
        featuredTitle: '⭐ <span class="highlight">Featured Products</span>',
        newTitle: '🆕 <span class="highlight">New Products</span>',
        bestTitle: '🔥 <span class="highlight">Best Sellers</span>',
        testimonialTitle: '💬 <span class="highlight">Testimonials</span> <span class="sub">What they say</span>',
        viewAll: 'View All →',
        testimonial1: "The quality of the sketchbook is excellent! The paper is thick and doesn't tear easily. The product matches the photos and description.",
        testimonial2: 'The quality of the eraser is really good! It erases cleanly. Highly recommendeddd.',
        testimonial3: "The mechanical pencil is comfortable to hold, produces precise lines, and the graphite doesn't break easily. Shipping was fast, too!",
        testimonial4: 'The acrylic paint is really good! the color is thick, the results of my painting are amazing ^^',
        roleIllustrator: 'Illustrator',
        roleArtist: 'Fine Artist',
        roleArchitect: 'Architect',
         roleArtist2: 'Artist',
        breadcrumbHome: '🏠 Home',
        breadcrumbCatalog: 'Catalog',
        breadcrumbCart: 'Cart',
        breadcrumbCheckout: 'Checkout',
        catalogTitle: '📦 Product Catalog',
        filterAll: 'All Categories',
        sortFeatured: 'Newest',
        sortPriceAsc: 'Price: Low to High',
        sortPriceDesc: 'Price: High to Low',
        sortRating: 'Best Rating',
        loadingMore: 'Loading more products...',
        checkoutTitle: '💳 Checkout',
        shippingInfo: '📋 Shipping Information',
        fullName: 'Full Name',
        phoneNumber: 'Phone Number',
        address: 'Shipping Address',
        city: 'City',
        postalCode: 'Postal Code',
        paymentMethod: 'Payment Method',
        paymentBank: '🏦 Bank Transfer',
        paymentVA: '🏧 Virtual Account',
        paymentQRIS: '📱 QRIS',
        paymentEWallet: '💳 E-Wallet',
        paymentCOD: '🚚 COD',
        notes: 'Notes (Optional)',
        orderSummary: '🛒 Order Summary',
        shippingCost: 'Shipping Cost',
        total: 'Total',
        confirmOrder: '✅ Confirm Order',
        loginTitle: '👤 Login',
        username: 'Username',
        password: 'Password',
        loginBtn: 'Login',
        noAccount: 'Don\'t have an account? <a onclick="authSwitch()">Register</a>',
        memberSince: 'Member since 2026',
        logoutBtn: 'Logout',
        aboutTitle: 'ℹ️ About Sketchyy',
        aboutDesc: 'Sketchyy is a premium art supply store founded in 2026 with the aim of providing high-quality tools for artists, illustrators, and art lovers. We believe that everyone has extraordinary artistic talent, and we are here to help realize it with the best products from various world-renowned brands.',
        mission: 'Mission',
        missionDesc: 'Providing quality art supplies',
        vision: 'Vision',
        visionDesc: 'Becoming the main destination for artists',
        values: 'Values',
        valuesDesc: 'Quality, Integrity, and Best Service',
        contactTitle: '📞 Contact Us',
        faqTitle: '❓ Frequently Asked Questions',
        faq1q: 'How to order products?',
        faq1a: 'You can select the desired product, click "Add to Cart", then proceed to the Checkout page to fill in shipping data and make payment.',
        faq2q: 'Is there a warranty for products?',
        faq2a: 'Yes, all our products have a 30-day warranty for damage caused by manufacturing defects.',
        faq3q: 'How long does shipping take?',
        faq3a: 'Shipping usually takes 2-5 working days depending on the delivery location.',
        faq4q: 'Can I return items?',
        faq4a: 'Yes, you can return items within 14 days of receipt provided the product is not damaged and is still in its original packaging.',
        cartTitle: '🛍️ Shopping Cart',
        emptyCart: 'Cart is empty',
        emptyCartSub: 'Let\'s go shopping!',
        clearCart: 'Clear Cart',
        checkoutBtn: 'Checkout →',
        addToCart: '+ Add to Cart',
        buyNow: 'Buy Now',
        inStock: 'In Stock',
        limitedStock: 'Limited Stock',
        outOfStock: 'Out of Stock',
        adminAccessDenied: 'Access Denied',
        adminLoginRequired: 'Please login first to access the admin dashboard.',
        adminStats: '📊 Admin Dashboard',
        totalRevenue: 'Total Revenue',
        totalOrders: 'Total Orders',
        productsSold: 'Products Sold',
        totalCustomers: 'Customers',
        revenueChart: '📈 Revenue Chart (This Month)',
        orderId: 'Order ID',
        customer: 'Customer',
        status: 'Status',
        date: 'Date',
        delivered: 'Delivered',
        processing: 'Processing',
        shipped: 'Shipped',
        productName: 'Product Name',
        category: 'Category',
        price: 'Price',
        stock: 'Stock',
        available: 'Available',
        limited: 'Limited Stock',
        empty: 'Empty',
        orderSuccess: '🎉 Order Successful!',
        orderNumberLabel: 'Order Number',
        orderThankYou: 'Thank you for shopping at Sketchyy! ✨',
        backToHome: 'Back to Home',
        selectVariant: 'Select Variant',
        fullDescription: '📖 Full Description',
        howToUse: '🎯 How to Use',
        careInstructions: '🧼 Care Instructions',
        frequentlyBought: '🔄 Frequently Bought Together',
        relatedProducts: '📦 Related Products',
        reviews: 'reviews',
        remaining: 'remaining',
        variant: 'Variant',
        size: 'Size',
        thickness: 'Paper Thickness',
        colors: 'Colors',
        set: 'Set',
        stockManagement: '📦 Stock Management',
        updateStock: 'Update Stock',
        currentStock: 'Current Stock',
        addStock: 'Add Stock',
        reduceStock: 'Reduce Stock',
        setStock: 'Set Stock'
    }
};

// ===== STATE =====
let currentLang = 'id';
let cart = {};
let currentCategory = 'all';
let currentSort = 'featured';
let currentPage = 1;
const itemsPerPage = 12;
let filteredProducts = [...products];
let isLoggedIn = false;
let currentUser = null;
let orderCounter = 1000;

// ===== DOM REFS =====
const cartCountEl = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const cartBody = document.getElementById('cartBody');
const cartIcon = document.getElementById('cartIcon');
const clearCartBtn = document.getElementById('clearCartBtn');
const checkoutBtn = document.getElementById('checkoutBtn');
const searchInput = document.getElementById('searchInput');
const suggestionsBox = document.getElementById('suggestionsBox');
const filterCategorySelect = document.getElementById('filterCategory');
const sortBySelect = document.getElementById('sortBy');
const catalogGrid = document.getElementById('catalogGrid');
const catalogLoader = document.getElementById('catalogLoader');
const featuredGrid = document.getElementById('featuredGrid');
const newGrid = document.getElementById('newGrid');
const bestGrid = document.getElementById('bestGrid');
const detailContainer = document.getElementById('detailContainer');
const detailBreadcrumbName = document.getElementById('detailBreadcrumbName');
const adminContent = document.getElementById('adminContent');

// ===== LANGUAGE FUNCTIONS =====
function setLanguage(lang) {
    currentLang = lang;
    document.getElementById('langId').classList.toggle('active', lang === 'id');
    document.getElementById('langEn').classList.toggle('active', lang === 'en');

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
                if (el.placeholder) {
                    el.placeholder = translations[lang][key];
                }
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    renderHomeProducts();
    applyFilters();
    const detailContainerEl = document.getElementById('detailContainer');
    if (detailContainerEl && detailContainerEl.innerHTML) {
        const breadcrumbName = document.getElementById('detailBreadcrumbName').textContent;
        const product = products.find(p => p.name === breadcrumbName || p.nameEn === breadcrumbName);
        if (product) {
            showProductDetail(product.id);
        }
    }
    showToast(`Language changed to ${lang === 'id' ? 'Indonesian' : 'English'}`, '🌐');
}

// ===== CART FUNCTIONS =====
function loadCart() {
    const saved = localStorage.getItem('sketchyy_cart');
    if (saved) cart = JSON.parse(saved);
}

function saveCart() {
    localStorage.setItem('sketchyy_cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    let total = 0;
    for (let id in cart) total += cart[id].qty;
    document.getElementById('cartCount').textContent = total;
}

function addToCart(productId, variantIndex = 0, qty = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const variant = product.variants[variantIndex];
    if (!variant) return;
    
    const cartKey = `${productId}-${variantIndex}`;
    if (variant.stock < (cart[cartKey]?.qty || 0) + qty) {
        showToast(currentLang === 'id' ? 'Stok tidak mencukupi!' : 'Insufficient stock!', '⚠️');
        return;
    }
    if (cart[cartKey]) {
        cart[cartKey].qty += qty;
    } else {
        cart[cartKey] = { 
            qty, 
            name: `${currentLang === 'id' ? product.name : product.nameEn} - ${variant.label}`, 
            price: variant.price, 
            image: product.image,
            productId: productId,
            variantIndex: variantIndex
        };
    }
    saveCart();
    const msg = currentLang === 'id' ? `${product.name} ditambahkan ke keranjang` : `${product.nameEn} added to cart`;
    showToast(msg, '✅');
}

function removeFromCart(cartKey) {
    const name = cart[cartKey]?.name;
    delete cart[cartKey];
    saveCart();
    if (document.getElementById('cartBody')) renderCartModal();
    const msg = currentLang === 'id' ? `${name} dihapus dari keranjang` : `${name} removed from cart`;
    showToast(msg, '🗑️');
}

function updateCartQty(cartKey, delta) {
    if (!cart[cartKey]) return;
    const newQty = cart[cartKey].qty + delta;
    if (newQty <= 0) {
        removeFromCart(cartKey);
        return;
    }
    const item = cart[cartKey];
    const product = products.find(p => p.id === item.productId);
    if (product && product.variants[item.variantIndex].stock < newQty) {
        showToast(currentLang === 'id' ? 'Stok tidak mencukupi!' : 'Insufficient stock!', '⚠️');
        return;
    }
    cart[cartKey].qty = newQty;
    saveCart();
    renderCartModal();
}

function getCartTotal() {
    let total = 0;
    for (let id in cart) {
        total += cart[id].price * cart[id].qty;
    }
    return total;
}

// ===== CART MODAL =====
function openCart() {
    renderCartModal();
    document.getElementById('cartModal').classList.add('active');
}

function closeCart() {
    document.getElementById('cartModal').classList.remove('active');
}

function renderCartModal() {
    const body = document.getElementById('cartBody');
    if (Object.keys(cart).length === 0) {
        body.innerHTML = `<div class="empty-cart"><div class="icon">🛒</div><p>${currentLang === 'id' ? 'Keranjang masih kosong' : 'Cart is empty'}</p><small style="color:var(--text-light);">${currentLang === 'id' ? 'Yuk, belanja dulu!' : 'Let\'s go shopping!'}</small></div>`;
        return;
    }
    let html = '';
    let total = 0;
    for (let id in cart) {
        const item = cart[id];
        const subtotal = item.price * item.qty;
        total += subtotal;
        html += `
            <div class="cart-item">
                <img src="${item.image || 'my%20sketchh.jpg'}" alt="${item.name}">
                <div class="info">
                    <div class="name">${item.name}</div>
                    <div class="price">Rp ${item.price.toLocaleString('id-ID')}</div>
                </div>
                <div class="qty-control">
                    <button onclick="updateCartQty('${id}', -1)">−</button>
                    <span>${item.qty}</span>
                    <button onclick="updateCartQty('${id}', 1)">+</button>
                </div>
                <button class="remove" onclick="removeFromCart('${id}')">✕</button>
            </div>
        `;
    }
    html += `
        <div class="cart-total">${currentLang === 'id' ? 'Total' : 'Total'}: <span>Rp ${total.toLocaleString('id-ID')}</span></div>
    `;
    body.innerHTML = html;
}

function clearCart() {
    cart = {};
    saveCart();
    renderCartModal();
    showToast(currentLang === 'id' ? 'Keranjang dikosongkan' : 'Cart cleared', '🗑️');
}

function proceedToCheckout() {
    if (Object.keys(cart).length === 0) {
        showToast(currentLang === 'id' ? 'Keranjang kosong!' : 'Cart is empty!', '⚠️');
        return;
    }
    closeCart();
    showPage('checkout');
    updateCheckoutSummary();
}

// ===== CHECKOUT =====
function updateCheckoutSummary() {
    const container = document.getElementById('checkoutItems');
    let html = '';
    let total = 0;
    for (let id in cart) {
        const item = cart[id];
        const subtotal = item.price * item.qty;
        total += subtotal;
        html += `
            <div class="summary-item">
                <span>${item.name} x${item.qty}</span>
                <span>Rp ${subtotal.toLocaleString('id-ID')}</span>
            </div>
        `;
    }
    container.innerHTML = html;
    document.getElementById('checkoutTotal').textContent = `Rp ${(total + 20000).toLocaleString('id-ID')}`;
}

function confirmOrder() {
    if (Object.keys(cart).length === 0) {
        showToast(currentLang === 'id' ? 'Keranjang kosong!' : 'Cart is empty!', '⚠️');
        return;
    }
    const orderNumber = `#SK-2026-${String(orderCounter++).padStart(4, '0')}`;
    
    const overlay = document.getElementById('orderToastOverlay');
    document.getElementById('orderToastNumber').textContent = orderNumber;
    document.getElementById('orderToastTitle').textContent = currentLang === 'id' ? '🎉 Pesanan Berhasil!' : '🎉 Order Successful!';
    document.getElementById('orderToastLabel').textContent = currentLang === 'id' ? 'Nomor Pesanan' : 'Order Number';
    document.getElementById('orderToastThankYou').textContent = currentLang === 'id' ? 'Terima kasih telah berbelanja di Sketchyy! ✨' : 'Thank you for shopping at Sketchyy! ✨';
    document.getElementById('orderToastButton').textContent = currentLang === 'id' ? 'Kembali ke Beranda' : 'Back to Home';
    overlay.classList.add('active');
    
    cart = {};
    saveCart();
    updateCartUI();
}

function closeOrderToast() {
    document.getElementById('orderToastOverlay').classList.remove('active');
    showPage('home');
}

// ===== PRODUCT RENDERING =====
function renderProductCard(product) {
    const hasDiscount = product.discount > 0;
    const firstVariant = product.variants[0];
    const price = firstVariant ? firstVariant.price : product.basePrice;
    const originalPrice = hasDiscount ? Math.round(price / (1 - product.discount/100)) : price;
    const stars = '⭐'.repeat(Math.floor(product.rating || 4)) + (product.rating % 1 >= 0.5 ? '⭐' : '');
    const addText = currentLang === 'id' ? '+ Tambah ke Keranjang' : '+ Add to Cart';
    const variantCount = product.variants.length;
    const displayName = currentLang === 'id' ? product.name : product.nameEn;
    const categoryName = currentLang === 'id' ? product.category : 
        ({drawing:'Drawing', painting:'Painting', paper:'Paper', accessories:'Accessories'})[product.category] || product.category;

    return `
        <div class="product-card" onclick="showProductDetail('${product.id}')">
            ${hasDiscount ? `<span class="badge discount">${product.discount}%</span>` : ''}
            <img class="product-img" src="${product.image}" alt="${displayName}" loading="lazy">
            <div class="product-info">
                <div class="product-name">${displayName}</div>
                <div class="product-category">${categoryName} • ${variantCount} ${currentLang === 'id' ? 'varian' : 'variants'}</div>
                <div class="product-price">
                    <span class="current">Rp ${price.toLocaleString('id-ID')}</span>
                    ${hasDiscount ? `<span class="original">Rp ${Math.round(originalPrice).toLocaleString('id-ID')}</span>` : ''}
                    ${hasDiscount ? `<span class="discount-percent">-${product.discount}%</span>` : ''}
                </div>
                <div class="product-rating">${stars} ${product.rating} <span>(${product.reviews || 0})</span></div>
                <button class="btn-add" onclick="event.stopPropagation(); showProductDetail('${product.id}')">${addText}</button>
            </div>
        </div>
    `;
}

function renderHomeProducts() {
    const featured = products.filter(p => p.id === 'sketchbook');
    document.getElementById('featuredGrid').innerHTML = featured.map(p => renderProductCard(p)).join('');

    const newItems = products.filter(p => p.id === 'watercolor');
    document.getElementById('newGrid').innerHTML = newItems.map(p => renderProductCard(p)).join('');

    const best = products.filter(p => p.id === 'acrylic');
    document.getElementById('bestGrid').innerHTML = best.map(p => renderProductCard(p)).join('');
}

// ===== CATALOG =====
function renderCatalog() {
    const grid = document.getElementById('catalogGrid');
    const start = 0;
    const end = currentPage * itemsPerPage;
    const items = filteredProducts.slice(start, end);

    if (currentPage === 1) {
        grid.innerHTML = items.map(p => renderProductCard(p)).join('');
    } else {
        grid.innerHTML += items.map(p => renderProductCard(p)).join('');
    }

    if (items.length < filteredProducts.length && currentPage * itemsPerPage < filteredProducts.length) {
        document.getElementById('catalogLoader').style.display = 'block';
    } else {
        document.getElementById('catalogLoader').style.display = 'none';
    }
}

function applyFilters() {
    const category = document.getElementById('filterCategory').value;
    const sort = document.getElementById('sortBy').value;

    let filtered = [...products];

    if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
    }

    switch (sort) {
        case 'price-asc': filtered.sort((a, b) => (a.variants[0]?.price || 0) - (b.variants[0]?.price || 0)); break;
        case 'price-desc': filtered.sort((a, b) => (b.variants[0]?.price || 0) - (a.variants[0]?.price || 0)); break;
        case 'rating': filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0)); break;
        default: filtered.sort((a, b) => a.id.localeCompare(b.id));
    }

    filteredProducts = filtered;
    currentPage = 1;
    renderCatalog();
}

function filterCategory(category, el) {
    document.querySelectorAll('.category-item').forEach(c => c.classList.remove('active'));
    if (el) el.classList.add('active');
    document.getElementById('filterCategory').value = category;
    applyFilters();
    showPage('catalog');
    setTimeout(() => {
        document.getElementById('catalogGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
    const categoryNames = {
        'all': currentLang === 'id' ? 'Semua' : 'All',
        'drawing': currentLang === 'id' ? 'Menggambar' : 'Drawing',
        'painting': currentLang === 'id' ? 'Melukis' : 'Painting',
        'paper': currentLang === 'id' ? 'Kertas' : 'Paper',
        'accessories': currentLang === 'id' ? 'Aksesoris' : 'Accessories'
    };
    showToast(`${currentLang === 'id' ? 'Menampilkan' : 'Showing'} ${categoryNames[category] || category}`, '📂');
}

function setupInfiniteScroll() {
    let loading = false;
    window.addEventListener('scroll', () => {
        const loader = document.getElementById('catalogLoader');
        if (!loader || loader.style.display === 'none') return;
        const rect = loader.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100 && !loading) {
            loading = true;
            currentPage++;
            renderCatalog();
            setTimeout(() => { loading = false; }, 500);
        }
    });
}

// ===== PRODUCT DETAIL =====
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    showPage('detail');
    document.getElementById('detailBreadcrumbName').textContent = currentLang === 'id' ? product.name : product.nameEn;

    const addText = currentLang === 'id' ? '+ Tambah ke Keranjang' : '+ Add to Cart';
    const buyText = currentLang === 'id' ? 'Beli Sekarang' : 'Buy Now';
    const selectVariantText = currentLang === 'id' ? 'Pilih Varian' : 'Select Variant';

    let related = [];
    const drawingGroups = ['sketchbook', 'mechanical', 'eraser', 'watercolor', 'colored', 'crayon'];
    const paintingGroups = ['canvas', 'brush', 'palette', 'acrylic'];
    
    if (drawingGroups.includes(product.group)) {
        related = products.filter(p => drawingGroups.includes(p.group) && p.id !== product.id);
    } else if (paintingGroups.includes(product.group)) {
        related = products.filter(p => paintingGroups.includes(p.group) && p.id !== product.id);
    }
    related = related.slice(0, 4);

    const together = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

    const firstVariant = product.variants[0];
    const hasDiscount = product.discount > 0;
    const stars = '⭐'.repeat(Math.floor(product.rating || 4)) + (product.rating % 1 >= 0.5 ? '⭐' : '');
    const stockStatus = firstVariant?.stock > 10 ? (currentLang === 'id' ? '✅ Tersedia' : '✅ In Stock') : 
                        firstVariant?.stock > 0 ? (currentLang === 'id' ? '⚠️ Stok Terbatas' : '⚠️ Limited Stock') : 
                        (currentLang === 'id' ? '❌ Habis' : '❌ Out of Stock');
    const stockColor = firstVariant?.stock > 10 ? '#22c55e' : firstVariant?.stock > 0 ? '#f59e0b' : '#ef4444';

    let variantOptions = `
        <div class="variant-select">
            <label>${selectVariantText}</label>
            <select id="variantSelect" onchange="updateVariantDisplay('${product.id}')">
                ${product.variants.map((v, i) => `
                    <option value="${i}" ${i === 0 ? 'selected' : ''}>
                        ${v.label} - Rp ${v.price.toLocaleString('id-ID')} (${currentLang === 'id' ? 'Stok' : 'Stock'}: ${v.stock})
                    </option>
                `).join('')}
            </select>
        </div>
    `;

    const displayName = currentLang === 'id' ? product.name : product.nameEn;
    const displayDesc = currentLang === 'id' ? product.description : product.descriptionEn;
    const displayUsage = currentLang === 'id' ? product.usage : product.usageEn;
    const displayCare = currentLang === 'id' ? product.care : product.careEn;

    const container = document.getElementById('detailContainer');
    container.innerHTML = `
        <div class="product-detail-wrapper">
            <div class="gallery">
                <img class="main-img" src="${product.image}" alt="${displayName}" id="detailMainImage">
                <div class="thumbnails">
                    ${(product.images || [product.image]).map(img => `
                        <img src="${img}" alt="${displayName}" onclick="document.getElementById('detailMainImage').src='${img}'" class="${img === product.image ? 'active' : ''}">
                    `).join('')}
                </div>
            </div>
            <div class="detail-info">
                <div class="sku">SKU: ${firstVariant?.sku || 'N/A'}</div>
                <h1>${displayName}</h1>
                <div class="rating"><span class="stars">${stars}</span> ${product.rating || 4.5} (${product.reviews || 0} ${currentLang === 'id' ? 'ulasan' : 'reviews'})</div>
                <div class="price-box">
                    <span class="current" id="detailPrice">Rp ${firstVariant?.price.toLocaleString('id-ID') || 0}</span>
                    ${hasDiscount ? `<span class="original">Rp ${Math.round(firstVariant?.price / (1 - product.discount/100)).toLocaleString('id-ID')}</span>` : ''}
                    ${hasDiscount ? `<span class="discount">-${product.discount}%</span>` : ''}
                </div>
                <div class="stock" style="color:${stockColor};" id="detailStock">${stockStatus} (${firstVariant?.stock || 0} ${currentLang === 'id' ? 'tersisa' : 'remaining'})</div>
                <div class="description">${displayDesc}</div>

                <div class="specs" id="detailSpecs">
                    <div class="spec-item"><span class="label">${currentLang === 'id' ? 'Berat' : 'Weight'}</span><span class="value" id="detailWeight">${firstVariant?.weight || '200g'}</span></div>
                    <div class="spec-item"><span class="label">${currentLang === 'id' ? 'Dimensi' : 'Dimensions'}</span><span class="value" id="detailDims">${firstVariant?.dims || 'Standar'}</span></div>
                    <div class="spec-item"><span class="label">${currentLang === 'id' ? 'Kategori' : 'Category'}</span><span class="value">${currentLang === 'id' ? product.category : 
                        ({drawing:'Drawing', painting:'Painting', paper:'Paper', accessories:'Accessories'})[product.category] || product.category}</span></div>
                    <div class="spec-item"><span class="label">${currentLang === 'id' ? 'Varian' : 'Variants'}</span><span class="value">${product.variants.length}</span></div>
                </div>

                ${variantOptions}

                <div class="action-btns">
                    <button class="btn-buy" onclick="addToCartWithVariant('${product.id}')">${addText}</button>
                    <button class="btn-cart-detail" onclick="addToCartWithVariant('${product.id}'); proceedToCheckout();">${buyText}</button>
                </div>
            </div>
        </div>

        <div style="margin-top:40px;">
            <h3 style="font-size:20px; margin-bottom:12px;">${currentLang === 'id' ? '📖 Deskripsi Lengkap' : '📖 Full Description'}</h3>
            <p style="color:var(--text-light); line-height:1.8;">${displayDesc}</p>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:20px;">
                <div style="background:var(--cream); padding:16px; border-radius:12px;">
                    <h4 style="margin-bottom:8px;">${currentLang === 'id' ? '🎯 Cara Penggunaan' : '🎯 How to Use'}</h4>
                    <p style="font-size:14px; color:var(--text-light);">${displayUsage}</p>
                </div>
                <div style="background:var(--cream); padding:16px; border-radius:12px;">
                    <h4 style="margin-bottom:8px;">${currentLang === 'id' ? '🧼 Cara Perawatan' : '🧼 Care Instructions'}</h4>
                    <p style="font-size:14px; color:var(--text-light);">${displayCare}</p>
                </div>
            </div>
        </div>

        <div style="margin-top:40px;">
            <h3 style="font-size:20px; margin-bottom:12px;">${currentLang === 'id' ? '🔄 Sering dibeli bersamaan' : '🔄 Frequently Bought Together'}</h3>
            <div class="related-grid">
                ${together.map(p => {
                    const pName = currentLang === 'id' ? p.name : p.nameEn;
                    return `
                        <div class="related-card" onclick="showProductDetail('${p.id}')">
                            <img src="${p.image}" alt="${pName}">
                            <div class="name">${pName}</div>
                            <div class="price">Rp ${(p.variants[0]?.price || 0).toLocaleString('id-ID')}</div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>

        <div style="margin-top:40px;">
            <h3 style="font-size:20px; margin-bottom:12px;">${currentLang === 'id' ? '📦 Produk Terkait' : '📦 Related Products'}</h3>
            <div class="related-grid">
                ${related.map(p => {
                    const pName = currentLang === 'id' ? p.name : p.nameEn;
                    return `
                        <div class="related-card" onclick="showProductDetail('${p.id}')">
                            <img src="${p.image}" alt="${pName}">
                            <div class="name">${pName}</div>
                            <div class="price">Rp ${(p.variants[0]?.price || 0).toLocaleString('id-ID')}</div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function updateVariantDisplay(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const select = document.getElementById('variantSelect');
    const idx = parseInt(select.value);
    const variant = product.variants[idx];
    if (!variant) return;

    document.getElementById('detailPrice').textContent = `Rp ${variant.price.toLocaleString('id-ID')}`;
    document.getElementById('detailStock').textContent = `${variant.stock > 10 ? '✅ Tersedia' : variant.stock > 0 ? '⚠️ Stok Terbatas' : '❌ Habis'} (${variant.stock} ${currentLang === 'id' ? 'tersisa' : 'remaining'})`;
    document.getElementById('detailWeight').textContent = variant.weight || '200g';
    document.getElementById('detailDims').textContent = variant.dims || 'Standar';
}

function addToCartWithVariant(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const select = document.getElementById('variantSelect');
    const idx = parseInt(select.value);
    addToCart(productId, idx);
}

// ===== SEARCH =====
function setupSearch() {
    const input = document.getElementById('searchInput');
    const suggestions = document.getElementById('suggestionsBox');

    input.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        if (query.length < 2) {
            suggestions.classList.remove('active');
            return;
        }
        const results = products.filter(p => {
            const nameMatch = p.name.toLowerCase().includes(query);
            const nameEnMatch = p.nameEn.toLowerCase().includes(query);
            return nameMatch || nameEnMatch;
        }).slice(0, 6);
        if (results.length === 0) {
            suggestions.innerHTML = `<div class="suggestion-item"><span class="icon">🔍</span> ${currentLang === 'id' ? 'Tidak ada hasil' : 'No results'}</div>`;
        } else {
            suggestions.innerHTML = results.map(p => {
                const displayName = currentLang === 'id' ? p.name : p.nameEn;
                return `
                    <div class="suggestion-item" onclick="searchSelect('${p.id}')">
                        <span class="icon">📦</span> ${displayName} - Rp ${(p.variants[0]?.price || 0).toLocaleString('id-ID')}
                    </div>
                `;
            }).join('');
        }
        suggestions.classList.add('active');
    });

    input.addEventListener('blur', () => {
        setTimeout(() => suggestions.classList.remove('active'), 200);
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const query = input.value.trim();
            if (query.length > 1) {
                const results = products.filter(p => {
                    const nameMatch = p.name.toLowerCase().includes(query.toLowerCase());
                    const nameEnMatch = p.nameEn.toLowerCase().includes(query.toLowerCase());
                    return nameMatch || nameEnMatch;
                });
                if (results.length > 0) {
                    showProductDetail(results[0].id);
                    suggestions.classList.remove('active');
                }
            }
        }
    });
}

function searchSelect(productId) {
    document.getElementById('searchInput').value = '';
    document.getElementById('suggestionsBox').classList.remove('active');
    showProductDetail(productId);
}

// ===== PAGE NAVIGATION =====
function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(`page-${page}`);
    if (target) target.classList.add('active');

    document.querySelectorAll('.nav-list a').forEach(a => a.classList.remove('active'));
    document.querySelectorAll('.nav-list a').forEach(a => {
        if (a.textContent.toLowerCase().includes(page)) a.classList.add('active');
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (page === 'checkout') {
        updateCheckoutSummary();
    }

    if (page === 'admin') {
        renderAdmin();
    }
}

// ===== TOAST =====
function showToast(message, icon = '✅') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon">${icon}</span> ${message}`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('out');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== FAQ =====
function toggleFaq(el) {
    const answer = el.nextElementSibling;
    const isOpen = answer.classList.contains('open');
    document.querySelectorAll('.faq-item .answer').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.faq-item .question').forEach(q => q.classList.remove('active'));
    if (!isOpen) {
        answer.classList.add('open');
        el.classList.add('active');
    }
}

// ===== AUTH =====
let authMode = 'login';

function authSwitch() {
    if (authMode === 'login') {
        authMode = 'register';
        document.getElementById('authTitle').textContent = currentLang === 'id' ? '📝 Daftar Akun' : '📝 Register';
        document.getElementById('authSubmitBtn').textContent = currentLang === 'id' ? 'Daftar' : 'Register';
        document.getElementById('authSwitchText').innerHTML = currentLang === 'id' ? 'Sudah punya akun? <a onclick="authSwitch()">Login</a>' : 'Already have an account? <a onclick="authSwitch()">Login</a>';
    } else {
        authMode = 'login';
        document.getElementById('authTitle').textContent = currentLang === 'id' ? '👤 Login' : '👤 Login';
        document.getElementById('authSubmitBtn').textContent = currentLang === 'id' ? 'Login' : 'Login';
        document.getElementById('authSwitchText').innerHTML = currentLang === 'id' ? 'Belum punya akun? <a onclick="authSwitch()">Daftar</a>' : 'Don\'t have an account? <a onclick="authSwitch()">Register</a>';
    }
}

function authLogin() {
    const username = document.getElementById('authUsername').value.trim() || 'user123';
    if (authMode === 'register') {
        isLoggedIn = true;
        currentUser = username;
        showToast(currentLang === 'id' ? 'Akun berhasil dibuat! 🎉' : 'Account created! 🎉', '✅');
    } else {
        isLoggedIn = true;
        currentUser = username;
        showToast(currentLang === 'id' ? `Selamat datang, ${username}! 👋` : `Welcome, ${username}! 👋`, '👤');
    }
    updateAuthUI();
}

function authLogout() {
    isLoggedIn = false;
    currentUser = null;
    updateAuthUI();
    showToast(currentLang === 'id' ? 'Logout berhasil' : 'Logged out', '👋');
}

function updateAuthUI() {
    if (isLoggedIn && currentUser) {
        document.getElementById('authFormContainer').style.display = 'none';
        document.getElementById('authProfile').style.display = 'block';
        document.getElementById('profileName').textContent = currentUser;
    } else {
        document.getElementById('authFormContainer').style.display = 'block';
        document.getElementById('authProfile').style.display = 'none';
    }
}

// ===== STOCK MANAGEMENT =====
function loadStockData() {
    const saved = localStorage.getItem('sketchyy_stock');
    if (saved) {
        const stockData = JSON.parse(saved);
        products.forEach(product => {
            product.variants.forEach((variant, idx) => {
                const key = `${product.id}-${idx}`;
                if (stockData[key] !== undefined) {
                    variant.stock = stockData[key];
                }
            });
        });
    }
}

function saveStockData() {
    const stockData = {};
    products.forEach(product => {
        product.variants.forEach((variant, idx) => {
            stockData[`${product.id}-${idx}`] = variant.stock;
        });
    });
    localStorage.setItem('sketchyy_stock', JSON.stringify(stockData));
}

function updateStock(productId, variantIndex, delta) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const variant = product.variants[variantIndex];
    if (!variant) return;
    
    const newStock = variant.stock + delta;
    if (newStock < 0) {
        showToast(currentLang === 'id' ? 'Stok tidak bisa negatif!' : 'Stock cannot be negative!', '⚠️');
        return;
    }
    
    variant.stock = newStock;
    const variantId = `${productId}-${variantIndex}`;
    const stockDisplay = document.getElementById(`stock-${variantId}`);
    const stockInput = document.getElementById(`stock-input-${variantId}`);
    if (stockDisplay) stockDisplay.textContent = newStock;
    if (stockInput) stockInput.value = newStock;
    
    const action = delta > 0 ? 'ditambahkan' : 'dikurangi';
    const msg = currentLang === 'id' 
        ? `Stok ${product.name} - ${variant.label} ${action} menjadi ${newStock}` 
        : `Stock ${product.nameEn} - ${variant.label} ${delta > 0 ? 'added to' : 'reduced to'} ${newStock}`;
    showToast(msg, '📦');
    saveStockData();
}

function setStock(productId, variantIndex) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const variant = product.variants[variantIndex];
    if (!variant) return;
    
    const variantId = `${productId}-${variantIndex}`;
    const input = document.getElementById(`stock-input-${variantId}`);
    const newStock = parseInt(input.value);
    
    if (isNaN(newStock) || newStock < 0) {
        showToast(currentLang === 'id' ? 'Masukkan angka yang valid!' : 'Enter a valid number!', '⚠️');
        return;
    }
    
    variant.stock = newStock;
    const stockDisplay = document.getElementById(`stock-${variantId}`);
    if (stockDisplay) stockDisplay.textContent = newStock;
    const msg = currentLang === 'id' 
        ? `Stok ${product.name} - ${variant.label} diatur menjadi ${newStock}` 
        : `Stock ${product.nameEn} - ${variant.label} set to ${newStock}`;
    showToast(msg, '📦');
    saveStockData();
}

function renderStockManagement() {
    let html = `
        <div class="stock-management">
            <h3 data-key="stockManagement">${currentLang === 'id' ? '📦 Manajemen Stok' : '📦 Stock Management'}</h3>
            <div id="stockList">
    `;

    products.forEach(product => {
        product.variants.forEach((variant, idx) => {
            const variantId = `${product.id}-${idx}`;
            const displayName = currentLang === 'id' ? product.name : product.nameEn;
            html += `
                <div class="stock-item" data-variant="${variantId}">
                    <div class="product-info">
                        <div class="name">${displayName}</div>
                        <div class="variant">${variant.label} - SKU: ${variant.sku}</div>
                    </div>
                    <div class="stock-control">
                        <span style="font-size:13px; color:var(--text-light);">${currentLang === 'id' ? 'Stok' : 'Stock'}:</span>
                        <button class="btn-minus" onclick="updateStock('${product.id}', ${idx}, -1)" title="${currentLang === 'id' ? 'Kurangi 1' : 'Reduce by 1'}">−</button>
                        <span class="stock-display" id="stock-${variantId}">${variant.stock}</span>
                        <button class="btn-plus" onclick="updateStock('${product.id}', ${idx}, 1)" title="${currentLang === 'id' ? 'Tambah 1' : 'Add by 1'}">+</button>
                        <input type="number" class="stock-input" id="stock-input-${variantId}" value="${variant.stock}" min="0" step="1">
                        <button class="btn-set" onclick="setStock('${product.id}', ${idx})" title="${currentLang === 'id' ? 'Atur Stok' : 'Set Stock'}">${currentLang === 'id' ? 'Atur' : 'Set'}</button>
                    </div>
                </div>
            `;
        });
    });

    html += `
            </div>
        </div>
    `;
    return html;
}

// ===== ADMIN =====
function renderAdmin() {
    const container = document.getElementById('adminContent');

    if (!isLoggedIn) {
        container.innerHTML = `
            <div class="access-denied">
                <div class="icon">🔒</div>
                <h2 data-key="adminAccessDenied">${currentLang === 'id' ? 'Akses Ditolak' : 'Access Denied'}</h2>
                <p data-key="adminLoginRequired">${currentLang === 'id' ? 'Silakan login terlebih dahulu untuk mengakses dashboard admin.' : 'Please login first to access the admin dashboard.'}</p>
                <button class="btn-primary" onclick="showPage('auth')" style="margin-top:16px;">${currentLang === 'id' ? 'Login Sekarang' : 'Login Now'}</button>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <h1 style="font-size:28px; color:var(--dark); margin-bottom:20px;" data-key="adminStats">${currentLang === 'id' ? '📊 Dashboard Admin' : '📊 Admin Dashboard'}</h1>

        <div class="admin-stats">
            <div class="stat-card">
                <div class="number">Rp 12.5M</div>
                <div class="label" data-key="totalRevenue">${currentLang === 'id' ? 'Total Pendapatan' : 'Total Revenue'}</div>
            </div>
            <div class="stat-card">
                <div class="number">342</div>
                <div class="label" data-key="totalOrders">${currentLang === 'id' ? 'Total Pesanan' : 'Total Orders'}</div>
            </div>
            <div class="stat-card">
                <div class="number">89</div>
                <div class="label" data-key="productsSold">${currentLang === 'id' ? 'Produk Terjual' : 'Products Sold'}</div>
            </div>
            <div class="stat-card">
                <div class="number">156</div>
                <div class="label" data-key="totalCustomers">${currentLang === 'id' ? 'Pelanggan' : 'Customers'}</div>
            </div>
        </div>

        <div class="admin-chart">
            <h3 style="margin-bottom:12px;" data-key="revenueChart">${currentLang === 'id' ? '📈 Grafik Pendapatan (Bulan Ini)' : '📈 Revenue Chart (This Month)'}</h3>
            <div class="chart-placeholder">
                <div class="bar" style="height:60px;"></div>
                <div class="bar" style="height:90px;"></div>
                <div class="bar" style="height:45px;"></div>
                <div class="bar" style="height:120px;"></div>
                <div class="bar" style="height:75px;"></div>
                <div class="bar" style="height:150px;"></div>
                <div class="bar" style="height:100px;"></div>
                <div class="bar" style="height:180px;"></div>
                <div class="bar" style="height:130px;"></div>
                <div class="bar" style="height:95px;"></div>
                <div class="bar" style="height:160px;"></div>
                <div class="bar" style="height:200px;"></div>
            </div>
        </div>

        <div style="display:flex; gap:12px; flex-wrap:wrap; margin-bottom:20px;">
            <button class="btn-primary" onclick="showAdminTab('orders')">${currentLang === 'id' ? '📦 Pesanan' : '📦 Orders'}</button>
            <button class="btn-secondary" onclick="showAdminTab('products')">${currentLang === 'id' ? '📦 Produk' : '📦 Products'}</button>
            <button class="btn-secondary" onclick="showAdminTab('stock')">${currentLang === 'id' ? '📦 Stok' : '📦 Stock'}</button>
            <button class="btn-secondary" onclick="showAdminTab('customers')">${currentLang === 'id' ? '👥 Pelanggan' : '👥 Customers'}</button>
            <button class="btn-secondary" onclick="showAdminTab('reviews')">${currentLang === 'id' ? '⭐ Review' : '⭐ Reviews'}</button>
        </div>

        <div id="adminTabContent">
            ${renderStockManagement()}
        </div>
    `;
}

function showAdminTab(tab) {
    const content = document.getElementById('adminTabContent');
    const statusLabels = {
        delivered: currentLang === 'id' ? 'Terkirim' : 'Delivered',
        processing: currentLang === 'id' ? 'Pemrosesan' : 'Processing',
        shipped: currentLang === 'id' ? 'Dikirim' : 'Shipped'
    };

    if (tab === 'orders') {
        content.innerHTML = `
            <table class="admin-table">
                <thead><tr><th data-key="orderId">${currentLang === 'id' ? 'ID Pesanan' : 'Order ID'}</th><th data-key="customer">${currentLang === 'id' ? 'Pelanggan' : 'Customer'}</th><th data-key="price">${currentLang === 'id' ? 'Total' : 'Total'}</th><th data-key="status">${currentLang === 'id' ? 'Status' : 'Status'}</th><th data-key="date">${currentLang === 'id' ? 'Tanggal' : 'Date'}</th></tr></thead>
                <tbody>
                    <tr><td>#SK-001</td><td>Andi Pratama</td><td>Rp 355.000</td><td><span class="status delivered">${statusLabels.delivered}</span></td><td>15 Jan 2026</td></tr>
                    <tr><td>#SK-002</td><td>Siti Rahma</td><td>Rp 705.500</td><td><span class="status processing">${statusLabels.processing}</span></td><td>14 Jan 2026</td></tr>
                    <tr><td>#SK-003</td><td>Budi Santoso</td><td>Rp 1.250.000</td><td><span class="status shipped">${statusLabels.shipped}</span></td><td>13 Jan 2026</td></tr>
                    <tr><td>#SK-004</td><td>Dewi Lestari</td><td>Rp 580.000</td><td><span class="status delivered">${statusLabels.delivered}</span></td><td>12 Jan 2026</td></tr>
                </tbody>
            </table>
        `;
    } else if (tab === 'products') {
        content.innerHTML = `
            <table class="admin-table">
                <thead><tr><th data-key="productName">${currentLang === 'id' ? 'Nama Produk' : 'Product Name'}</th><th data-key="category">${currentLang === 'id' ? 'Kategori' : 'Category'}</th><th data-key="price">${currentLang === 'id' ? 'Harga' : 'Price'}</th><th data-key="stock">${currentLang === 'id' ? 'Stok' : 'Stock'}</th><th data-key="status">${currentLang === 'id' ? 'Status' : 'Status'}</th></tr></thead>
                <tbody>
                    ${products.map(p => {
                        const v = p.variants[0];
                        const displayName = currentLang === 'id' ? p.name : p.nameEn;
                        const categoryName = currentLang === 'id' ? p.category : 
                            ({drawing:'Drawing', painting:'Painting', paper:'Paper', accessories:'Accessories'})[p.category] || p.category;
                        return `<tr><td>${displayName}</td><td>${categoryName}</td><td>Rp ${(v?.price || 0).toLocaleString('id-ID')}</td><td>${v?.stock || 0}</td>
                        <td><span class="status ${v?.stock > 10 ? 'delivered' : v?.stock > 0 ? 'shipped' : 'processing'}">${v?.stock > 10 ? (currentLang === 'id' ? 'Tersedia' : 'Available') : v?.stock > 0 ? (currentLang === 'id' ? 'Stok Terbatas' : 'Limited') : (currentLang === 'id' ? 'Habis' : 'Empty')}</span></td></tr>`;
                    }).join('')}
                </tbody>
            </table>
        `;
    } else if (tab === 'stock') {
        content.innerHTML = renderStockManagement();
    } else if (tab === 'customers') {
        content.innerHTML = `
            <table class="admin-table">
                <thead><tr><th data-key="customer">${currentLang === 'id' ? 'Nama' : 'Name'}</th><th>Email</th><th data-key="totalOrders">${currentLang === 'id' ? 'Pesanan' : 'Orders'}</th><th data-key="date">${currentLang === 'id' ? 'Bergabung' : 'Joined'}</th></tr></thead>
                <tbody>
                    <tr><td>Andi Pratama</td><td>andi@mail.com</td><td>5</td><td>Jan 2026</td></tr>
                    <tr><td>Siti Rahma</td><td>siti@mail.com</td><td>8</td><td>Des 2025</td></tr>
                    <tr><td>Budi Santoso</td><td>budi@mail.com</td><td>3</td><td>Feb 2026</td></tr>
                </tbody>
            </table>
        `;
    } else if (tab === 'reviews') {
        content.innerHTML = `
            <table class="admin-table">
                <thead><tr><th data-key="productName">${currentLang === 'id' ? 'Produk' : 'Product'}</th><th data-key="customer">${currentLang === 'id' ? 'Pelanggan' : 'Customer'}</th><th data-key="rating">${currentLang === 'id' ? 'Rating' : 'Rating'}</th><th data-key="comment">${currentLang === 'id' ? 'Komentar' : 'Comment'}</th></tr></thead>
                <tbody>
                    <tr><td>${currentLang === 'id' ? 'Sketchbook' : 'Sketchbook'}</td><td>Andi P.</td><td>⭐⭐⭐⭐⭐</td><td>${currentLang === 'id' ? 'Kualitas bagus!' : 'Great quality!'}</td></tr>
                    <tr><td>${currentLang === 'id' ? 'Cat Air' : 'Watercolor'}</td><td>Siti R.</td><td>⭐⭐⭐⭐⭐</td><td>${currentLang === 'id' ? 'Warna cerah!' : 'Bright colors!'}</td></tr>
                    <tr><td>${currentLang === 'id' ? 'Pensil Mekanik' : 'Mechanical Pencil'}</td><td>Budi S.</td><td>⭐⭐⭐⭐</td><td>${currentLang === 'id' ? 'Presisi banget' : 'Very precise'}</td></tr>
                </tbody>
            </table>
        `;
    }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    loadStockData();
    renderHomeProducts();
    applyFilters();
    updateCartUI();
    setupSearch();
    setupInfiniteScroll();
    
    // Auto login for demo
    isLoggedIn = true;
    currentUser = 'user123';
    updateAuthUI();
    
    console.log('🖌️ Sketchyy E-Commerce loaded successfully!');
    console.log(`📦 ${products.length} product groups with variants available`);
});