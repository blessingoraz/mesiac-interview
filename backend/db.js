import Sequelize from 'sequelize';
import _ from 'lodash';
import Faker from 'faker';

const Conn = new Sequelize('students', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
  });

  const Student = Conn.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    birthDate: {
        type: Sequelize.STRING,
        allowNull: false
    },
    hobbies: {
        type: Sequelize.STRING
    },
    photo: {
        type: Sequelize.STRING
    }
  });

  Conn.sync({force: true}).then(() => {
    _.times(10, () => {
        return Student.create({
            firstName: Faker.name.firstName(),
            lastName: Faker.name.lastName(),
            birthDate: Faker.date.weekday(),
            hobbies: Faker.lorem.words(),
            photo: Faker.image.avatar()
        })
    })
  });

  export default Conn;
