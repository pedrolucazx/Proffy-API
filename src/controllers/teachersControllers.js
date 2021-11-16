const Teachers = require('../models/Teachers');

async function listTeachers(resquest, response) {

  try {
    const teachers = await Teachers.findAll();
    response.status(200).json(teachers);
  } catch (error) {
    console.log(error);
  }
}

async function createTeachers(request, response) {

  try {
    const {
      names,
      photo,
      whatsapp,
      bio,
      theme,
      price,
      day,
      start,
      end,
    } = request.body;

    console.log(names);

    const teacher = await Teachers.create({
      names,
      photo,
      whatsapp,
      bio,
      theme,
      price,
      day,
      start,
      end,
    });

    response.status(201).json({ message: 'O úsuairo foi criado:', teacher});
    
  } catch (error) {
    console.log(error);
    response.status(400).json({
      message: 'Deu erro em algum campo',
    });
  };
};

async function getTeacher( request, response){
  
  const { id } = request.params;
  
  try {
    const teacher = await Teachers.findOne({
      where:{
        id: id,
      },
    });

    response.status(200).json(teacher);
  } catch (error) {
    console.log(error);
    response.status(400).json({
      message: "algo deu errado!",
    })
  }
}

module.exports = { listTeachers, createTeachers, getTeacher }