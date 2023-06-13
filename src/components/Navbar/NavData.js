export const data = [
  {
    text: "Anasayfa",
    type: "mainButton",
    url: "/",
    order: 1,
  },
  {
    text: "Hizmetlerimiz",
    type: "parentButton",
    url: "/hizmetlerimiz",
    order: 2,

    children: [
      {
        text: "Teknik Hizmetlerimiz",
        type: "parentButton",
        url: "/teknik-hizmetlerimiz",
        order: 1,
        children: [
          {
            text: "Frontend Teknolojileri",
            type: "childButton",
            url: "/frontend-teknolojileri",
            order: 1,
          },
          {
            text: "Backend Teknolojileri",
            type: "childButton",
            url: "/backend-teknolojileri",
            order: 2,
          },
          {
            text: "AWS Hizmetleri",
            type: "childButton",
            url: "/aws-hizmetleri",
            order: 3,
          },
        ],
      },
      {
        text: "Danışmanlık Hizmetlerimiz",
        type: "parentButton",
        url: "/danismanlik-hizmetlerimiz",
        order: 2,
        children: [
          {
            text: "Teknik Destek",
            type: "childButton",
            url: "/teknik-destek",
            order: 1,
          },
          {
            text: "Bilgilendirme Hizmetleri",
            type: "childButton",
            url: "/bilgilendirme-hizmetleri",
            order: 2,
          },
          {
            text: "Mentorluk Hizmetleri",
            type: "childButton",
            url: "/mentorluk-hizmetleri",
            order: 3,
          },
          {
            text: "Danışmanlık Eğitimleri",
            type: "parentButton",
            url: "/danismanlik-egitimleri",
            order: 4,
            children: [
              {
                text: "Sertifikalı Danışmanlık Hizmeti",
                type: "greatChildButton",
                url: "/sertifikali-danismanlik-hizmeti",
                order: 1,
              },
              {
                text: "Kurumsal Danışmanlık Hizmeti",
                type: "greatChildButton",
                url: "/kurumsal-danismanlik-hizmeti",
                order: 2,
              },
            ],
          },
          {
            text: "Eğitim Öğretim Planlama",
            type: "childButton",
            url: "/egitim-ogretim-planlama",
            order: 5,
          },
          {
            text: "Yazılım Danışmanlığı",
            type: "childButton",
            url: "/yazilim-danismanligi",
            order: 6,
          },
          {
            text: "Proje Danışmanlığı",
            type: "childButton",
            url: "/proje-danismanligi",
            order: 7,
          },
        ],
      },
      {
        text: "Hatalı Altyapı Onarımı",
        type: "childButton",
        url: "/hatali-altyapi-onarimi",
        order: 3,
      },
    ],
  },
  {
    text: "Hakkımızda",
    type: "parentButton",
    url: "/hakkimizda",
    order: 3,
    children: [
      {
        text: "Biz Kimiz?",
        type: "childButton",
        url: "/biz-kimiz",
        order: 1,
      },
      {
        text: "Kurumsal",
        type: "childButton",
        url: "/kurumsal",
        order: 2,
      },
      {
        text: "Referanslarımız",
        type: "parentButton",
        url: "/referanslarimiz",
        order: 3,
        children: [
          {
            text: "Geçmiş Referanslar",
            type: "parentButton",
            url: "/gecmis-referanslar",
            order: 1,
            children: [
              {
                text: "x referansı",
                type: "greatChildButton",
                url: "/x-referansi",
                order: 1,
              },
              {
                text: "y referansı",
                type: "greatChildButton",
                url: "/y-referansi",
                order: 2,
              },
              {
                text: "z referansı",
                type: "greatChildButton",
                url: "/z-referansi",
                order: 3,
              },
            ],
          },
          {
            text: "Gelecek Referanslar",
            type: "parentButton",
            url: "/gelecek-referanslar",
            order: 2,
            children: [
              {
                text: "a referansı",
                type: "childButton",
                url: "/a-referansi",
                order: 1,
              },
              {
                text: "b referansı",
                type: "childButton",
                url: "/b-referansi",
                order: 2,
              },
              {
                text: "c referansı",
                type: "childButton",
                url: "/c-referansi",
                order: 3,
              },
            ],
          },
        ],
      },
      {
        text: "Vizyon",
        type: "childButton",
        url: "/vizyon",
        order: 4,
      },
      {
        text: "Misyon",
        type: "childButton",
        url: "/misyon",
        order: 5,
      },
    ],
  },
  {
    text: "İletişim",
    type: "mainButton",
    url: "/iletisim",
    order: 4,
  },
  {
    text: "Kayıt Ol",
    type: "mainButton",
    url: "/kayit-ol",
    order: 5,
  },
  {
    text: "Giriş Yap",
    type: "mainButton",
    url: "/giris-yap",
    order: 6,
  },
];

export const buttonStyle = {
  backgroundColor: "transparent",
  color: "#fff",
  cursor: "pointer",
  transition: "0.3s",
  border: "none",
  width: "100%",
  maxWidth: "300px",
};
