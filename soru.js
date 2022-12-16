function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("İngilizcesi 'Apple' olan meyvenin Türkçe karşılığı nedir?", { a: "Elma", b: "Armut", c: "Muz" , d: "Portakal" }, "a"),
    new Soru("İngilizcesi 'Orange' olan meyvenin Türkçe karşılığı nedir?", { a: "Elma", b: "Armut", c: "Muz" , d: "Portakal" }, "d"),
    new Soru("İngilizcesi 'Banana' olan meyvenin Türkçe karşılığı nedir?", { a: "Elma", b: "Armut", c: "Muz" , d: "Portakal" }, "c"),
    new Soru("İngilizcesi 'Grape' olan meyvenin Türkçe karşılığı nedir?", { a: "Kavun", b: "Karpuz", c: "Üzüm" , d: "Şeftali" }, "c"),
    new Soru("İngilizcesi 'Melon' olan meyvenin Türkçe karşılığı nedir?", { a: "Karpuz", b: "Kavun", c: "Şeftali" , d: "Üzüm" }, "b"),
    new Soru("İngilizcesi 'Blueberry ' olan meyvenin Türkçe karşılığı nedir?", { a: "Yabanmersini", b: "Kavun", c: "Üzüm" , d: "Şeftali" }, "a"),
    new Soru("İngilizcesi 'Watermelon' olan meyvenin Türkçe karşılığı nedir?", { a: "Şeftali", b: "Kavun", c: "Portakal" , d: "Karpuz" }, "d"),
    new Soru("İngilizcesi 'Strawberry' olan meyvenin Türkçe karşılığı nedir?", { a: "Mango ", b: "Çilek", c: "Yabanmersini" , d: "Portakal" }, "b"),
    new Soru("İngilizcesi 'Blackberry' olan meyvenin Türkçe karşılığı nedir?", { a: "Yabanmersini ", b: "Çilek", c: "Mango" , d: "Böğürtlen" }, "d"),
    new Soru("İngilizcesi 'Cherry' olan meyvenin Türkçe karşılığı nedir?", { a: "Kiraz ", b: "Çilek", c: "Yabanmersini" , d: "Portakal" }, "a")  
];