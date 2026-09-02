export type EducationItem = {
  year: string;
  institution: string;
  institutionFull?: string;
  program: string;
  specialization?: string;
  qualification: string;
  label?: string;
};

export type QualificationItem = {
  year: string;
  institution: string;
  institutionFull?: string;
  program: string;
  teacher: string;
};

export const educationItems: EducationItem[] = [
  {
    year: "2010",
    institution: "РГСУ",
    institutionFull: "Российский Государственный Социальный Университет",
    program: "Специальная психология",
    qualification: "Специальный психолог",
  },
  {
    year: "2014",
    institution: "МГППУ",
    institutionFull: "Московский Городской Психолого-Педагогический Университет",
    program: "Клиническая психология",
    specialization: "Патопсихологическая диагностика и психотерапия",
    qualification: "Клинический психолог, патопсихолог, нейропсихолог",
    label: "Клиническая психология • Нейропсихология",
  },
  {
    year: "2018",
    institution: "МИП",
    institutionFull: "Московский Институт Психоанализа",
    program: "Стратегическое и краткосрочное системное консультирование",
    qualification: "Психолог",
  },
];

export const qualificationItems: QualificationItem[] = [
  {
    year: "2007",
    institution: "Институт Современной Психологии Развития",
    program: "Нейропсихология",
    teacher: "Визель Т.Г.",
  },
  {
    year: "2012",
    institution: "НИЦДН",
    institutionFull: "Научно-Исследовательский Центр Детской Нейропсихологии им. Лурия А.Р.",
    program: "Нейропсихологическая диагностика и коррекция в детском возрасте",
    teacher: "Глозман Ж.М.",
  },
  {
    year: "2013",
    institution: "ЦПМСС «Взаимодействие»",
    program: "Нейропсихология детского возраста. Метод замещающего онтогенеза.",
    teacher: "Семенович А.В.",
  },
  {
    year: "2015",
    institution: "ЦПМСС «Взаимодействие»",
    program:
      "Психолого-педагогические приёмы и технологии эффективного взаимодействия с семьёй учащихся с трудностями освоения ООП и нарушениями поведения",
    teacher: "Вшивкова И.В.",
  },
  {
    year: "2018",
    institution: "МИП",
    institutionFull: "Московский Институт Психоанализа",
    program: "Нейропсихологическая реабилитация и коррекция в клинической и образовательной практике",
    teacher: "Каменецкая М.И.",
  },
];

export const educationInsights = [
  {
    num: "01",
    title: "Понимание развития",
    description:
      "Специальная психология сформировала основу для понимания закономерностей развития и индивидуальных особенностей человека.",
  },
  {
    num: "02",
    title: "Клинический взгляд",
    description:
      "Клиническая психология и нейропсихология расширили понимание когнитивных процессов и особенностей функционирования мозга.",
  },
  {
    num: "03",
    title: "Системный подход",
    description:
      "Обучение системному консультированию позволило рассматривать человека в контексте его отношений и жизненной ситуации.",
  },
];
