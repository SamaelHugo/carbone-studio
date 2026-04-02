export interface Service {
  id: string;
  name: string;
  price: string;
  category: "barber" | "tattoo";
  duration: string;
  description: string;
}

export interface Master {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialization: string;
  photo: string;
  bio: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  category: "barber" | "tattoo";
  master: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "b1",
    name: "Мужская стрижка",
    price: "2 500 ₽",
    category: "barber",
    duration: "45 мин",
    description:
      "Классическая или современная стрижка с учётом формы лица и структуры волос.",
  },
  {
    id: "b2",
    name: "Стрижка + борода",
    price: "3 500 ₽",
    category: "barber",
    duration: "60 мин",
    description:
      "Комплексная услуга: стрижка и моделирование бороды с горячим полотенцем.",
  },
  {
    id: "b3",
    name: "Королевское бритьё",
    price: "2 000 ₽",
    category: "barber",
    duration: "40 мин",
    description:
      "Бритьё опасной бритвой с горячими компрессами и уходовыми средствами.",
  },
  {
    id: "b4",
    name: "Камуфляж седины",
    price: "3 000 ₽",
    category: "barber",
    duration: "50 мин",
    description:
      "Естественное тонирование седых волос с сохранением текстуры.",
  },
  {
    id: "b5",
    name: "Детская стрижка",
    price: "1 500 ₽",
    category: "barber",
    duration: "30 мин",
    description: "Стрижка для детей до 12 лет в комфортной атмосфере.",
  },
  {
    id: "t1",
    name: "Консультация + эскиз",
    price: "Бесплатно",
    category: "tattoo",
    duration: "30 мин",
    description:
      "Обсуждение идеи, выбор стиля и разработка индивидуального эскиза.",
  },
  {
    id: "t2",
    name: "Мини-тату (до 5 см)",
    price: "от 5 000 ₽",
    category: "tattoo",
    duration: "1–2 ч",
    description:
      "Небольшие работы: символы, надписи, минималистичные рисунки.",
  },
  {
    id: "t3",
    name: "Средняя работа (5–15 см)",
    price: "от 10 000 ₽",
    category: "tattoo",
    duration: "2–4 ч",
    description:
      "Детализированные композиции среднего размера в любом стиле.",
  },
  {
    id: "t4",
    name: "Крупная работа (от 15 см)",
    price: "от 20 000 ₽",
    category: "tattoo",
    duration: "4–8 ч",
    description:
      "Масштабные проекты: рукава, спина, сложные многосессионные работы.",
  },
  {
    id: "t5",
    name: "Перекрытие / Cover-up",
    price: "от 15 000 ₽",
    category: "tattoo",
    duration: "3–6 ч",
    description:
      "Перекрытие старых или некачественных татуировок новым дизайном.",
  },
];

export const masters: Master[] = [
  {
    id: "m1",
    name: "Артём Волков",
    role: "Барбер",
    experience: "8 лет опыта",
    specialization: "Классические стрижки, фейды",
    photo:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=750&fit=crop&crop=face",
    bio: "Мастер точных линий и чистых фейдов. Специализируется на классических мужских стрижках с современным подходом.",
  },
  {
    id: "m2",
    name: "Даниил Крест",
    role: "Тату-мастер",
    experience: "10 лет опыта",
    specialization: "Реализм, портреты",
    photo:
      "https://images.unsplash.com/photo-1611695434369-a8f5d76ceb7b?w=600&h=750&fit=crop&crop=face",
    bio: "Художник-реалист с академическим образованием. Каждая работа — произведение искусства с фотографической точностью.",
  },
  {
    id: "m3",
    name: "Марк Осипов",
    role: "Старший барбер",
    experience: "12 лет опыта",
    specialization: "Бритьё, моделирование бороды",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    bio: "Виртуоз опасной бритвы и мастер работы с бородой. Превращает каждый визит в ритуал.",
  },
  {
    id: "m4",
    name: "Алиса Тень",
    role: "Тату-мастер",
    experience: "6 лет опыта",
    specialization: "Графика, дотворк",
    photo:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=750&fit=crop&crop=face",
    bio: "Создаёт уникальные геометрические и графические композиции. Каждый эскиз разрабатывается индивидуально.",
  },
];

export const gallery: GalleryItem[] = [
  {
    id: "g1",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=800&fit=crop",
    category: "barber",
    master: "Артём Волков",
    description: "Текстурный кроп с фейдом",
  },
  {
    id: "g2",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=800&fit=crop",
    category: "tattoo",
    master: "Даниил Крест",
    description: "Реалистичный портрет, предплечье",
  },
  {
    id: "g3",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
    category: "barber",
    master: "Марк Осипов",
    description: "Королевское бритьё с горячим полотенцем",
  },
  {
    id: "g4",
    image:
      "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?auto=format&fit=crop&w=800&q=80",
    category: "tattoo",
    master: "Алиса Тень",
    description: "Геометрический дотворк, плечо",
  },
  {
    id: "g5",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=800&fit=crop",
    category: "barber",
    master: "Артём Волков",
    description: "Помпадур с чётким пробором",
  },
  {
    id: "g6",
    image:
      "https://images.unsplash.com/photo-1611695434369-a8f5d76ceb7b?w=600&h=800&fit=crop",
    category: "tattoo",
    master: "Даниил Крест",
    description: "Чёрно-серый реализм, рукав",
  },
  {
    id: "g7",
    image:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=800&fit=crop",
    category: "barber",
    master: "Марк Осипов",
    description: "Моделирование бороды",
  },
  {
    id: "g8",
    image:
      "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=600&h=800&fit=crop",
    category: "tattoo",
    master: "Алиса Тень",
    description: "Минималистичная графика, запястье",
  },
  {
    id: "g9",
    image:
      "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600&h=800&fit=crop",
    category: "barber",
    master: "Артём Волков",
    description: "Классический андеркат",
  },
  {
    id: "g10",
    image:
      "https://images.unsplash.com/photo-1598371839696-5c5bb1c494c9?w=600&h=800&fit=crop",
    category: "tattoo",
    master: "Даниил Крест",
    description: "Детализированный реализм, голень",
  },
  {
    id: "g11",
    image:
      "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=600&h=800&fit=crop",
    category: "barber",
    master: "Марк Осипов",
    description: "Камуфляж седины, натуральный эффект",
  },
  {
    id: "g12",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=800&fit=crop",
    category: "tattoo",
    master: "Алиса Тень",
    description: "Ботаническая графика, рёбра",
  },
];
