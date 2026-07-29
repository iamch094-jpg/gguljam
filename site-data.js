window.GGULJAM_DEFAULT = {
  brand: "꿀잠펜션",
  englishBrand: "GGULJAM HANOK STAY",
  heroEyebrow: "A HANOK STAY IN GYEONGJU",
  heroTitle: "한옥의 시간 속에\n머무는 편안한 밤",
  heroSubtitle: "프라이빗 한옥 독채펜션 · 경주 북군동",
  heroImages: [
    "assets/images/exterior/exterior-03.webp",
    "assets/images/exterior/exterior-04.webp",
    "assets/images/exterior/exterior-01.webp",
    "assets/images/exterior/exterior-02.webp"
  ],
  introEyebrow: "SLOW STAY, DEEP REST",
  introTitle: "오래된 감나무 아래,\n우리만의 여유가 머무는 곳",
  introBody: "단체 모임도 넉넉히 품는 한옥과 넓은 잔디마당, 오랜 시간을 지켜온 감나무와 우물이 있습니다. 경주의 고요한 풍경 속에서 향기로운 여행과 특별한 쉼을 만나보세요.",
  storyTitle: "경주를 닮은 집",
  storyBody: "나무와 흙의 온기가 남은 공간, 마당을 천천히 걷는 시간. 꿀잠펜션은 화려함보다 편안함을, 빠른 여행보다 오래 기억되는 하루를 건넵니다.",
  rooms: [
    {
      id: "pul",
      name: "풀한포기방",
      englishName: "A BLADE OF GRASS",
      capacity: "기준 4명 · 최대 5명",
      description: "낮은 나무 가구와 따뜻한 흙빛 벽이 어우러진 아늑한 객실입니다.",
      images: Array.from({length: 13}, (_, i) => `assets/images/rooms/pul/pul-${String(i + 1).padStart(2, "0")}.webp`)
    },
    {
      id: "flower",
      name: "꽃한송이방",
      englishName: "A SINGLE FLOWER",
      capacity: "기준 4명 · 최대 6명",
      description: "가족과 친구가 함께 머물기 좋은 넓은 침실과 생활 공간을 갖췄습니다.",
      images: Array.from({length: 10}, (_, i) => `assets/images/rooms/flower/flower-${String(i + 1).padStart(2, "0")}.webp`)
    },
    {
      id: "tree",
      name: "나무 한그루방",
      englishName: "A SINGLE TREE",
      capacity: "기준 4명 · 최대 10명",
      description: "여럿이 함께해도 여유로운 침실과 거실을 갖춘 가장 넉넉한 객실입니다.",
      images: [
        "assets/images/rooms/tree/tree-03.webp",
        ...Array.from({length: 14}, (_, i) => `assets/images/rooms/tree/tree-${String(i + 1).padStart(2, "0")}.webp`).filter((src) => !src.endsWith("tree-03.webp"))
      ]
    }
  ],
  amenityTitle: "필요한 것은 가까이,\n쉼에 필요한 여백은 충분히",
  amenities: ["바비큐", "전용 주차", "무료 Wi-Fi", "넓은 잔디마당", "독채 공간", "주방 시설"],
  checkIn: "15:00",
  checkOut: "11:00",
  phone: "010-8530-7056",
  address: "경북 경주시 북군길 170",
  representativeName: "박소현",
  businessNumber: "505-10-25354",
  bookingUrl: "https://booking.ddnayo.com/?accommodationId=106656",
  nearby: [
    {name: "동궁원", distance: "차량 4분"},
    {name: "보문단지", distance: "가까운 거리"},
    {name: "황리단길", distance: "차량 15분"}
  ],
  refundPolicy: [
    "당일 취소 시 환불 불가",
    "이용일 1일 전 30% 환불",
    "이용일 2일 전 50% 환불",
    "이용일 3일 전 70% 환불",
    "이용일 4일 전 80% 환불",
    "이용일 5일 전 85% 환불",
    "이용일 6일 전 90% 환불",
    "기본 취소 수수료 10%",
    "타 채널의 환불 규정은 다를 수 있습니다."
  ],
  popups: [{
    id: "welcome-main",
    enabled: true,
    image: "assets/images/exterior/exterior-02.webp",
    eyebrow: "WELCOME TO GGULJAM",
    title: "경주에서 만나는\n고요한 한옥의 밤",
    body: "예약과 이용 문의는 전화 또는 실시간 예약에서 편하게 확인해 주세요.",
    buttonLabel: "실시간 예약"
  }]
};

// GitHub Pages refresh: 2026-07-29
