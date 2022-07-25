function burgermenu() {
    let menuitems = document.getElementById("burger-menu");
    let icon = document.getElementById("i-navbar");
    if (menuitems.style.display === "flex") {
        menuitems.style.display = "none";
        icon.className = "fa fa-navicon";
        icon.innerHTML = "";
    } else {
        menuitems.style.display = "flex";
        icon.className = "material-icons";
        icon.innerHTML = "close";
        icon.style.fontSize = "35px";
    }

}


function showdetails1() {
    var h2_details = document.getElementById("h2-matn-details");
    var p_details = document.getElementById("p-matn-details");
    var img_details = document.getElementById("img-details");
    h2_details.innerHTML = "تپسی کلاسیک";
    p_details.innerHTML = "با سرویس کلاسیک تپسی، یک خودروی اختصاصی برای رسیدن به مقصدتان دارید. تپسی کلاسیک، راهی سریع و آسان برای سفرهای درون‌شهری در هر ساعتی از روز است. در این سرویس، شما امکان تعیین دو یا چند مقصد و همچنین توقف در مسیر را دارید.";
    img_details.src = "img/illus-classic.webp";
    document.getElementById("img-1-details").style.opacity = "1";
    document.getElementById("img-2-details").style.opacity = "0.4";
    document.getElementById("img-3-details").style.opacity = "0.4";
    document.getElementById("img-4-details").style.opacity = "0.4";
    document.getElementById("img-5-details").style.opacity = "0.4";
    document.getElementById("img-6-details").style.opacity = "0.4";
    document.getElementById("img-7-details").style.opacity = "0.4";
    document.getElementById("img-8-details").style.opacity = "0.4";
    document.getElementById("img-9-details").style.opacity = "0.4";
}

function showdetails2() {
    var h2_details = document.getElementById("h2-matn-details");
    var p_details = document.getElementById("p-matn-details");
    var img_details = document.getElementById("img-details");
    h2_details.innerHTML = "موتوپیک";
    p_details.innerHTML = "با استفاده از سرویس موتوپیک، بسته‌ها و مرسولاتتان با پیک موتور به مقصد ارسال می‌شوند. این سرویس مناسب زمانی است که می‌خواهید مرسوله سریع‌تر به مقصد برسد. در این سرویس، شما می‌توانید مسیر رسیدن مرسوله‌تان به مقصد را به صورت لحظه‌ای روی نقشه دنبال کنید.";
    img_details.src = "img/illus-motopeyk.webp";
    document.getElementById("img-1-details").style.opacity = "0.4";
    document.getElementById("img-2-details").style.opacity = "1";
    document.getElementById("img-3-details").style.opacity = "0.4";
    document.getElementById("img-4-details").style.opacity = "0.4";
    document.getElementById("img-5-details").style.opacity = "0.4";
    document.getElementById("img-6-details").style.opacity = "0.4";
    document.getElementById("img-7-details").style.opacity = "0.4";
    document.getElementById("img-8-details").style.opacity = "0.4";
    document.getElementById("img-9-details").style.opacity = "0.4";
}

function showdetails3() {
    var h2_details = document.getElementById("h2-matn-details");
    var p_details = document.getElementById("p-matn-details");
    var img_details = document.getElementById("img-details");
    h2_details.innerHTML = "اتوپیک";
    p_details.innerHTML = "اتوپیک سرویسی برای ارسال بسته‌های شما با خودرو است. این سرویس، برای زمانی مناسب است که بسته‌های شما، با موتور قابل ارسال نیستند و یا در حین جابجایی، نیاز به مراقبت بیشتری دارند. در این سرویس نیز امکان رصد لحظه ‌به لحظه موقعیت مکانی مرسوله تا زمان رسیدن به مقصد فراهم است.";
    img_details.src = "img/illus-autopeyk.webp";
    document.getElementById("img-1-details").style.opacity = "0.4";
    document.getElementById("img-2-details").style.opacity = "0.4";
    document.getElementById("img-3-details").style.opacity = "1";
    document.getElementById("img-4-details").style.opacity = "0.4";
    document.getElementById("img-5-details").style.opacity = "0.4";
    document.getElementById("img-6-details").style.opacity = "0.4";
    document.getElementById("img-7-details").style.opacity = "0.4";
    document.getElementById("img-8-details").style.opacity = "0.4";
    document.getElementById("img-9-details").style.opacity = "0.4";
}

function showdetails4() {
    var h2_details = document.getElementById("h2-matn-details");
    var p_details = document.getElementById("p-matn-details");
    var img_details = document.getElementById("img-details");
    h2_details.innerHTML = "تپسی پلاس";
    p_details.innerHTML = "در سرویس پلاس تاکسی اینترنتی تپسی، خودرویی با مدل بالاتر و عمر کمتر، به دنبال شما خواهد آمد. همچنین، رانندگان این سرویس بالاترین امتیاز را از مسافران دریافت کرده‌اند. در این سرویس که در حال حاضر در تهران فعال است، امکان تعیین چند مقصد یا توقف در حین سفر، وجود دارد.";
    img_details.src = "img/illus-plus.webp";
    document.getElementById("img-1-details").style.opacity = "0.4";
    document.getElementById("img-2-details").style.opacity = "0.4";
    document.getElementById("img-3-details").style.opacity = "0.4";
    document.getElementById("img-4-details").style.opacity = "1";
    document.getElementById("img-5-details").style.opacity = "0.4";
    document.getElementById("img-6-details").style.opacity = "0.4";
    document.getElementById("img-7-details").style.opacity = "0.4";
    document.getElementById("img-8-details").style.opacity = "0.4";
    document.getElementById("img-9-details").style.opacity = "0.4";
}

function showdetails5() {
    var h2_details = document.getElementById("h2-matn-details");
    var p_details = document.getElementById("p-matn-details");
    var img_details = document.getElementById("img-details");
    h2_details.innerHTML = "تپسی تلفنی";
    p_details.innerHTML = "سرویس تپسی تلفنی یا ۱۶۳۰، این امکان را به شما می‌دهد که بدون نیاز به اینترنت و اپلیکیشن، درخواست خودرو بدهید. این سرویس تاکسی تلفنی مناسب زمانی است که به هر دلیلی دسترسی به اینترنت یا اپلیکیشن ندارید. همچنین سرویس تلفنی تپسی، راه حلی مناسب برای افرادی است که کار کردن با اپلیکیشن‌های موبایلی برایشان راحت نیست.";
    img_details.src = "img/illus-tel.webp";
    document.getElementById("img-1-details").style.opacity = "0.4";
    document.getElementById("img-2-details").style.opacity = "0.4";
    document.getElementById("img-3-details").style.opacity = "0.4";
    document.getElementById("img-4-details").style.opacity = "0.4";
    document.getElementById("img-5-details").style.opacity = "1";
    document.getElementById("img-6-details").style.opacity = "0.4";
    document.getElementById("img-7-details").style.opacity = "0.4";
    document.getElementById("img-8-details").style.opacity = "0.4";
    document.getElementById("img-9-details").style.opacity = "0.4";
}

function showdetails6() {
    var h2_details = document.getElementById("h2-matn-details");
    var p_details = document.getElementById("p-matn-details");
    var img_details = document.getElementById("img-details");
    h2_details.innerHTML = "همیار";
    p_details.innerHTML = "سرویس همیار تپسی، به جای شما خرید می‌کند. کافیست فروشگاه مورد نظر خود را به عنوان مبدا مشخص کرده و لیست خریدتان را داخل اپ وارد کنید. این خرید‌ها می‌تواند از سوپرمارکت یا داروخانه مورد نظر شما باشند.";
    img_details.src = "img/illus-hamyar.webp";
    document.getElementById("img-1-details").style.opacity = "0.4";
    document.getElementById("img-2-details").style.opacity = "0.4";
    document.getElementById("img-3-details").style.opacity = "0.4";
    document.getElementById("img-4-details").style.opacity = "0.4";
    document.getElementById("img-5-details").style.opacity = "0.4";
    document.getElementById("img-6-details").style.opacity = "1";
    document.getElementById("img-7-details").style.opacity = "0.4";
    document.getElementById("img-8-details").style.opacity = "0.4";
    document.getElementById("img-9-details").style.opacity = "0.4";
}

function showdetails7() {
    var h2_details = document.getElementById("h2-matn-details");
    var p_details = document.getElementById("p-matn-details");
    var img_details = document.getElementById("img-details");
    h2_details.innerHTML = "هم‌خط";
    p_details.innerHTML = "سرویس هم‌خط تپسی شما را با مینی‌بوس‌ به مقصد می‌رساند. با استفاده از سرویس هم‌خط بعد از انتخاب مسیر سفر، بلیت‌تان را خریداری کنید و سریع‌تر و راحت‌تر به مقصد برسید. این سرویس خطی بسیار ارزان‌تر از دیگر سرویس‌های تپسی است و شما را سریع‌تر و راحت‌تر از حمل‌ونقل عمومی به مقصدتان می‌رساند. شما می‌توانید از قبل بلیت هم خط را رزرو کنید و با رعایت فاصله اجتماعی به مقصد برسید. سرویس مینی بوس آنلاین فعلا فقط در تهران فعال است.";
    img_details.src = "img/illus-hamkhat.webp";
    document.getElementById("img-1-details").style.opacity = "0.4";
    document.getElementById("img-2-details").style.opacity = "0.4";
    document.getElementById("img-3-details").style.opacity = "0.4";
    document.getElementById("img-4-details").style.opacity = "0.4";
    document.getElementById("img-5-details").style.opacity = "0.4";
    document.getElementById("img-6-details").style.opacity = "0.4";
    document.getElementById("img-7-details").style.opacity = "1";
    document.getElementById("img-8-details").style.opacity = "0.4";
    document.getElementById("img-9-details").style.opacity = "0.4";
}

function showdetails8() {
    var h2_details = document.getElementById("h2-matn-details");
    var p_details = document.getElementById("p-matn-details");
    var img_details = document.getElementById("img-details");
    h2_details.innerHTML = "تپسی تاکسی";
    p_details.innerHTML = "در سرویس تاکسی تپسی، تاکسی‌های زرد یا سبز شما را به مقصدتان می‌رسانند. این سرویس در حال حاضر در تهران فعال است و چنانچه به دلایلی مانند ورود به محدوده طرح ترافیک یا طرح آلودگی هوا، ترجیح بدهید از تاکسی برای رفت‌وآمدتان استفاده کنید، گزینه مناسبی خواهد بود.";
    img_details.src = "img/illus-taxi.webp";
    document.getElementById("img-1-details").style.opacity = "0.4";
    document.getElementById("img-2-details").style.opacity = "0.4";
    document.getElementById("img-3-details").style.opacity = "0.4";
    document.getElementById("img-4-details").style.opacity = "0.4";
    document.getElementById("img-5-details").style.opacity = "0.4";
    document.getElementById("img-6-details").style.opacity = "0.4";
    document.getElementById("img-7-details").style.opacity = "0.4";
    document.getElementById("img-8-details").style.opacity = "1";
    document.getElementById("img-9-details").style.opacity = "0.4";
}

function showdetails9() {
    var h2_details = document.getElementById("h2-matn-details");
    var p_details = document.getElementById("p-matn-details");
    var img_details = document.getElementById("img-details");
    h2_details.innerHTML = "تپسی لاین";
    p_details.innerHTML = "تپسی لاین سرویسی است که امکان سفر اشتراکی را برایتان فراهم می‌کند. در این سرویس شما با مسافر دیگری که هم‌مسیرتان است، هم‌سفر خواهید بود و هزینه سفرتان تقسیم می‌شود. این سرویس در حال حاضر به دلیل شرایط همه‌گیری بیماری کرونا از دسترس خارج شده اما با بهبود شرایط می‌توانید از سرویس لاین استفاده کنید.";
    img_details.src = "img/illus-line.webp";
    document.getElementById("img-1-details").style.opacity = "0.4";
    document.getElementById("img-2-details").style.opacity = "0.4";
    document.getElementById("img-3-details").style.opacity = "0.4";
    document.getElementById("img-4-details").style.opacity = "0.4";
    document.getElementById("img-5-details").style.opacity = "0.4";
    document.getElementById("img-6-details").style.opacity = "0.4";
    document.getElementById("img-7-details").style.opacity = "0.4";
    document.getElementById("img-8-details").style.opacity = "0.4";
    document.getElementById("img-9-details").style.opacity = "1";
}



for (var i = 0, j = 0; i < 100; i++, j = +45000) {

    setTimeout(function () {
        var h2_details = document.getElementById("h2-matn-details");
        var p_details = document.getElementById("p-matn-details");
        var img_details = document.getElementById("img-details");
        h2_details.innerHTML = "موتوپیک";
        p_details.innerHTML = "با استفاده از سرویس موتوپیک، بسته‌ها و مرسولاتتان با پیک موتور به مقصد ارسال می‌شوند. این سرویس مناسب زمانی است که می‌خواهید مرسوله سریع‌تر به مقصد برسد. در این سرویس، شما می‌توانید مسیر رسیدن مرسوله‌تان به مقصد را به صورت لحظه‌ای روی نقشه دنبال کنید.";
        img_details.src = "img/illus-motopeyk.webp";
        document.getElementById("img-1-details").style.opacity = "0.4";
        document.getElementById("img-2-details").style.opacity = "1";
        document.getElementById("img-3-details").style.opacity = "0.4";
        document.getElementById("img-4-details").style.opacity = "0.4";
        document.getElementById("img-5-details").style.opacity = "0.4";
        document.getElementById("img-6-details").style.opacity = "0.4";
        document.getElementById("img-7-details").style.opacity = "0.4";
        document.getElementById("img-8-details").style.opacity = "0.4";
        document.getElementById("img-9-details").style.opacity = "0.4";
    }, 5000 + j)

    setTimeout(function () {
        var h2_details = document.getElementById("h2-matn-details");
        var p_details = document.getElementById("p-matn-details");
        var img_details = document.getElementById("img-details");
        h2_details.innerHTML = "اتوپیک";
        p_details.innerHTML = "اتوپیک سرویسی برای ارسال بسته‌های شما با خودرو است. این سرویس، برای زمانی مناسب است که بسته‌های شما، با موتور قابل ارسال نیستند و یا در حین جابجایی، نیاز به مراقبت بیشتری دارند. در این سرویس نیز امکان رصد لحظه ‌به لحظه موقعیت مکانی مرسوله تا زمان رسیدن به مقصد فراهم است.";
        img_details.src = "img/illus-autopeyk.webp";
        document.getElementById("img-1-details").style.opacity = "0.4";
        document.getElementById("img-2-details").style.opacity = "0.4";
        document.getElementById("img-3-details").style.opacity = "1";
        document.getElementById("img-4-details").style.opacity = "0.4";
        document.getElementById("img-5-details").style.opacity = "0.4";
        document.getElementById("img-6-details").style.opacity = "0.4";
        document.getElementById("img-7-details").style.opacity = "0.4";
        document.getElementById("img-8-details").style.opacity = "0.4";
        document.getElementById("img-9-details").style.opacity = "0.4";
    }, 10000 + j)

    setTimeout(function () {
        var h2_details = document.getElementById("h2-matn-details");
        var p_details = document.getElementById("p-matn-details");
        var img_details = document.getElementById("img-details");
        h2_details.innerHTML = "تپسی پلاس";
        p_details.innerHTML = "در سرویس پلاس تاکسی اینترنتی تپسی، خودرویی با مدل بالاتر و عمر کمتر، به دنبال شما خواهد آمد. همچنین، رانندگان این سرویس بالاترین امتیاز را از مسافران دریافت کرده‌اند. در این سرویس که در حال حاضر در تهران فعال است، امکان تعیین چند مقصد یا توقف در حین سفر، وجود دارد.";
        img_details.src = "img/illus-plus.webp";
        document.getElementById("img-1-details").style.opacity = "0.4";
        document.getElementById("img-2-details").style.opacity = "0.4";
        document.getElementById("img-3-details").style.opacity = "0.4";
        document.getElementById("img-4-details").style.opacity = "1";
        document.getElementById("img-5-details").style.opacity = "0.4";
        document.getElementById("img-6-details").style.opacity = "0.4";
        document.getElementById("img-7-details").style.opacity = "0.4";
        document.getElementById("img-8-details").style.opacity = "0.4";
        document.getElementById("img-9-details").style.opacity = "0.4";
    }, 15000 + j)

    setTimeout(function () {
        var h2_details = document.getElementById("h2-matn-details");
        var p_details = document.getElementById("p-matn-details");
        var img_details = document.getElementById("img-details");
        h2_details.innerHTML = "تپسی تلفنی";
        p_details.innerHTML = "سرویس تپسی تلفنی یا ۱۶۳۰، این امکان را به شما می‌دهد که بدون نیاز به اینترنت و اپلیکیشن، درخواست خودرو بدهید. این سرویس تاکسی تلفنی مناسب زمانی است که به هر دلیلی دسترسی به اینترنت یا اپلیکیشن ندارید. همچنین سرویس تلفنی تپسی، راه حلی مناسب برای افرادی است که کار کردن با اپلیکیشن‌های موبایلی برایشان راحت نیست.";
        img_details.src = "img/illus-tel.webp";
        document.getElementById("img-1-details").style.opacity = "0.4";
        document.getElementById("img-2-details").style.opacity = "0.4";
        document.getElementById("img-3-details").style.opacity = "0.4";
        document.getElementById("img-4-details").style.opacity = "0.4";
        document.getElementById("img-5-details").style.opacity = "1";
        document.getElementById("img-6-details").style.opacity = "0.4";
        document.getElementById("img-7-details").style.opacity = "0.4";
        document.getElementById("img-8-details").style.opacity = "0.4";
        document.getElementById("img-9-details").style.opacity = "0.4";
    }, 20000 + j)

    setTimeout(function () {
        var h2_details = document.getElementById("h2-matn-details");
        var p_details = document.getElementById("p-matn-details");
        var img_details = document.getElementById("img-details");
        h2_details.innerHTML = "همیار";
        p_details.innerHTML = "سرویس همیار تپسی، به جای شما خرید می‌کند. کافیست فروشگاه مورد نظر خود را به عنوان مبدا مشخص کرده و لیست خریدتان را داخل اپ وارد کنید. این خرید‌ها می‌تواند از سوپرمارکت یا داروخانه مورد نظر شما باشند.";
        img_details.src = "img/illus-hamyar.webp";
        document.getElementById("img-1-details").style.opacity = "0.4";
        document.getElementById("img-2-details").style.opacity = "0.4";
        document.getElementById("img-3-details").style.opacity = "0.4";
        document.getElementById("img-4-details").style.opacity = "0.4";
        document.getElementById("img-5-details").style.opacity = "0.4";
        document.getElementById("img-6-details").style.opacity = "1";
        document.getElementById("img-7-details").style.opacity = "0.4";
        document.getElementById("img-8-details").style.opacity = "0.4";
        document.getElementById("img-9-details").style.opacity = "0.4";
    }, 25000 + j)

    setTimeout(function () {
        var h2_details = document.getElementById("h2-matn-details");
        var p_details = document.getElementById("p-matn-details");
        var img_details = document.getElementById("img-details");
        h2_details.innerHTML = "هم‌خط";
        p_details.innerHTML = "سرویس هم‌خط تپسی شما را با مینی‌بوس‌ به مقصد می‌رساند. با استفاده از سرویس هم‌خط بعد از انتخاب مسیر سفر، بلیت‌تان را خریداری کنید و سریع‌تر و راحت‌تر به مقصد برسید. این سرویس خطی بسیار ارزان‌تر از دیگر سرویس‌های تپسی است و شما را سریع‌تر و راحت‌تر از حمل‌ونقل عمومی به مقصدتان می‌رساند. شما می‌توانید از قبل بلیت هم خط را رزرو کنید و با رعایت فاصله اجتماعی به مقصد برسید. سرویس مینی بوس آنلاین فعلا فقط در تهران فعال است.";
        img_details.src = "img/illus-hamkhat.webp";
        document.getElementById("img-1-details").style.opacity = "0.4";
        document.getElementById("img-2-details").style.opacity = "0.4";
        document.getElementById("img-3-details").style.opacity = "0.4";
        document.getElementById("img-4-details").style.opacity = "0.4";
        document.getElementById("img-5-details").style.opacity = "0.4";
        document.getElementById("img-6-details").style.opacity = "0.4";
        document.getElementById("img-7-details").style.opacity = "1";
        document.getElementById("img-8-details").style.opacity = "0.4";
        document.getElementById("img-9-details").style.opacity = "0.4";
    }, 30000 + j)

    setTimeout(function () {
        var h2_details = document.getElementById("h2-matn-details");
        var p_details = document.getElementById("p-matn-details");
        var img_details = document.getElementById("img-details");
        h2_details.innerHTML = "تپسی تاکسی";
        p_details.innerHTML = "در سرویس تاکسی تپسی، تاکسی‌های زرد یا سبز شما را به مقصدتان می‌رسانند. این سرویس در حال حاضر در تهران فعال است و چنانچه به دلایلی مانند ورود به محدوده طرح ترافیک یا طرح آلودگی هوا، ترجیح بدهید از تاکسی برای رفت‌وآمدتان استفاده کنید، گزینه مناسبی خواهد بود.";
        img_details.src = "img/illus-taxi.webp";
        document.getElementById("img-1-details").style.opacity = "0.4";
        document.getElementById("img-2-details").style.opacity = "0.4";
        document.getElementById("img-3-details").style.opacity = "0.4";
        document.getElementById("img-4-details").style.opacity = "0.4";
        document.getElementById("img-5-details").style.opacity = "0.4";
        document.getElementById("img-6-details").style.opacity = "0.4";
        document.getElementById("img-7-details").style.opacity = "0.4";
        document.getElementById("img-8-details").style.opacity = "1";
        document.getElementById("img-9-details").style.opacity = "0.4";
    }, 35000 + j)

    setTimeout(function () {
        var h2_details = document.getElementById("h2-matn-details");
        var p_details = document.getElementById("p-matn-details");
        var img_details = document.getElementById("img-details");
        h2_details.innerHTML = "تپسی لاین";
        p_details.innerHTML = "تپسی لاین سرویسی است که امکان سفر اشتراکی را برایتان فراهم می‌کند. در این سرویس شما با مسافر دیگری که هم‌مسیرتان است، هم‌سفر خواهید بود و هزینه سفرتان تقسیم می‌شود. این سرویس در حال حاضر به دلیل شرایط همه‌گیری بیماری کرونا از دسترس خارج شده اما با بهبود شرایط می‌توانید از سرویس لاین استفاده کنید.";
        img_details.src = "img/illus-line.webp";
        document.getElementById("img-1-details").style.opacity = "0.4";
        document.getElementById("img-2-details").style.opacity = "0.4";
        document.getElementById("img-3-details").style.opacity = "0.4";
        document.getElementById("img-4-details").style.opacity = "0.4";
        document.getElementById("img-5-details").style.opacity = "0.4";
        document.getElementById("img-6-details").style.opacity = "0.4";
        document.getElementById("img-7-details").style.opacity = "0.4";
        document.getElementById("img-8-details").style.opacity = "0.4";
        document.getElementById("img-9-details").style.opacity = "1";
    }, 40000 + j)

    setTimeout(function () {
        var h2_details = document.getElementById("h2-matn-details");
        var p_details = document.getElementById("p-matn-details");
        var img_details = document.getElementById("img-details");
        h2_details.innerHTML = "تپسی کلاسیک";
        p_details.innerHTML = "با سرویس کلاسیک تپسی، یک خودروی اختصاصی برای رسیدن به مقصدتان دارید. تپسی کلاسیک، راهی سریع و آسان برای سفرهای درون‌شهری در هر ساعتی از روز است. در این سرویس، شما امکان تعیین دو یا چند مقصد و همچنین توقف در مسیر را دارید.";
        img_details.src = "img/illus-classic.webp";
        document.getElementById("img-1-details").style.opacity = "1";
        document.getElementById("img-2-details").style.opacity = "0.4";
        document.getElementById("img-3-details").style.opacity = "0.4";
        document.getElementById("img-4-details").style.opacity = "0.4";
        document.getElementById("img-5-details").style.opacity = "0.4";
        document.getElementById("img-6-details").style.opacity = "0.4";
        document.getElementById("img-7-details").style.opacity = "0.4";
        document.getElementById("img-8-details").style.opacity = "0.4";
        document.getElementById("img-9-details").style.opacity = "0.4";
    }, 45000 + j)
}