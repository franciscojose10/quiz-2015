// Definicion del modelo de Quiz con validación

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Quiz',
    { pregunta: {
        type: DataTypes.STRING,
        validate: { notEmpty: {msg: "-> Falta Pregunta"}}
      },
      respuesta: {
        type: DataTypes.STRING,
        validate: { notEmpty: {msg: "-> Falta Respuesta"}}
      },
      indice: {
        type: DataTypes.ENUM,
        values: ["otro", "humanidades", "ocio", "ciencia", "tecnologia"],
        validate: { notEmpty: {msg: "-> Falta Tema"}}
      }
    }
  );
}