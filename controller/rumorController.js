const rummers = [{
    id : 1,
    name: "measels out break",
    sign: " fever,rush, vomiting",
    description: "50 people dead by measels out break around hawassa",
    region: "Sidama",
    zone: "hawassa",
    woreda: "tabor",
    kebele: "fara",
    number_of_case: 100,
    number_of_death: 50,
    reporting_date: "10/02/2025",
  },
  {
    id : 2,
    name: "malaria out break",
    sign: " fever, vomiting",
    description: "10 people dead by measels out break around hawassa",
    region: "Sidama",
    zone: "hawassa",
    woreda: "tabor",
    kebele: "ogena wacho",
    number_of_case: 20,
    number_of_death: 10,
    reporting_date: "10/03/2025",
  },
  {
    id : 3,
    name: "cholera out break",
    sign: " fever, vomiting, diarrhea",
    description: "15 people dead by measels out break around hawassa",
    region: "Sidama",
    zone: "hawassa",
    woreda: "tabor",
    kebele: "tilite",
    number_of_case: 35,
    number_of_death: 15,
    reporting_date: "10/04/2025",
  },
];
const getAllRumours = (req, res) => {
    res.json(rummers);
  };

  const getRumoursById = (req, res)=>{
  const id = req?.params.id;
  const rumour = rummers.find((rum) => rum.id == id);
  if (!rumour) {
    return res.status(404).json({ message: "rummour not found" });
  }
  res.json(rumour);
};

const updateRumourById = (req, res) => {
    const id = req.params.id;
    const rummerUpdate = req.body;
    const rumour = rummers.find((rum) => rum.id == id);
    if (!rumour) {
      return res.status(404).json({ message: "rummour not found" });
    }
    rumour.name = rummerUpdate.name ? rummerUpdate.name : rumour.name;
    rumour.sign = rummerUpdate.sign;
    rumour.description = rummerUpdate.description;
    rumour.region = rummerUpdate.region;
    rumour.zone = rummerUpdate.zone;
    rumour.kebele = rummerUpdate.kebele;
    rumour.number_of_case = rummerUpdate.number_of_case;
    rumour.number_of_death = rummerUpdate.number_of_death;
    rumour.reporting_date = rummerUpdate.reporting_date;
  
    res.json({ message: "successfully updated", data: rumour });
  };
  

  
  module.exports = {
    getAllRumours,
    getRumoursById,
    updateRumourById,
  };