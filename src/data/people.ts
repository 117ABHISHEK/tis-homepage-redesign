export interface Personality {
  name: string;
  role: string;
  slug: string; // file name in /public/images/people/ (without extension)
}

export const personalities: Personality[] = [
  { name: "Sakshi Malik", role: "Olympic Bronze Medalist in Wrestling (Rio 2016), Padma Shri 2017", slug: "sakshi-malik" },
  { name: "Vishesh Bhriguvanshi", role: "Indian Basketball Team Captain", slug: "vishesh-bhriguvanshi" },
  { name: "Prakashi Tomar", role: "'Shooter Dadi', 30-time National Championship winner", slug: "prakashi-tomar" },
  { name: "Abhishek Verma", role: "Arjuna Awardee, Asian Games Gold Medalist in Archery 2013", slug: "abhishek-verma" },
  { name: "Aditi Gopichand Swami", role: "Arjuna Awardee, World Champion in Archery 2024", slug: "aditi-gopichand-swami" },
  { name: "Jeevan Jyot Singh Teja", role: "Dronacharya Awardee in Archery 2022", slug: "jeevan-jyot-singh-teja" },
  { name: "Ojas Deotale", role: "Arjuna Awardee 2023, World Champion in Archery", slug: "ojas-deotale" },
  { name: "Rajat Chauhan", role: "Arjuna Awardee 2016 in Archery", slug: "rajat-chauhan" },
  { name: "Devendra Singh Bisht", role: "Under-18 School Indian Football Team Selector", slug: "devendra-singh-bisht" },
  { name: "Manish Metani", role: "Indian Football Player", slug: "manish-metani" },
  { name: "Saurabh Joshi", role: "Influencer with 30 million YouTube subscribers", slug: "saurabh-joshi" },
  { name: "Arushi Nishank", role: "Kathak dancer, actor, film producer and TEDx speaker", slug: "arushi-nishank" },
  { name: "Laxmi Agarwal", role: "Founder, The Laxmi Foundation", slug: "laxmi-agarwal" },
];

export const leaders = [
  { name: "Shri Dhan Singh Rawat Ji", role: "Minister of Higher Education, Uttarakhand" },
  { name: "Shri Trivendra Singh Rawat Ji", role: "MP and Former Chief Minister, Uttarakhand" },
  { name: "Shri Subodh Uniyal Ji", role: "Technical Education and Forest Minister, Uttarakhand" },
  { name: "Dr Ramesh Pokhriyal Nishank Ji", role: "Former Union Cabinet Minister for Education" },
  { name: "Shri Bhagat Singh Koshyari Ji", role: "Former Governor of Maharashtra and Goa" },
  { name: "Shri Dharmendra Pradhan Ji", role: "Union Minister of Education for India" },
  { name: "Shri Anurag Tripathi Ji", role: "CBSE Secretary, Uttarakhand" },
  { name: "Shri Arvind Pandey Ji", role: "MLA, Former Education Minister" },
  { name: "Shri Namami Bansal Ji", role: "IAS, Municipal Commissioner, Uttarakhand" },
  { name: "Shri Abhinav Kumar Ji", role: "ADG and former DGP of Uttarakhand Police" },
  { name: "Shri Janmejaya Khanduri Ji", role: "IG Dehradun, Government of India" },
  { name: "Shri Ashok Kumar Ji", role: "Former DGP, Uttarakhand" },
  { name: "Shri Amit Kumar Sinha Ji", role: "ADG, Principal Secretary Sports, Uttarakhand" },
  { name: "Shri Sunil Uniyal Gama Ji", role: "Former Mayor, Dehradun" },
  { name: "Shri Sahdev Singh Pundir Ji", role: "MLA Sahaspur, Uttarakhand" },
] as const;