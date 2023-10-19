// 1. Create an abstract class named UserRepository
class UserRepository {
    constructor() {
      if (new.target === UserRepository) {
        throw new Error('Cannot instantiate an abstract class.');
      }
    }
  
    // Abstract methods
    getAll() {
      throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    }
  
    add(user) {
      throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    }
  
    getByID(id) {
      throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    }
  
    deleteByID(id) {
      throw new Error('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    }
  }
  
  // 2. Create a child class that extends UserRepository named UserRepositoryPostgres
  class UserRepositoryPostgres extends UserRepository {
    constructor() {
      super();
      this.users = [
        { id: 1, name: 'Agus' },
        { id: 2, name: 'NHK' },
      ];
    }
  
    getAll() {
      return this.users;
    }
  
    add(user) {
      this.users.push(user);
    }
  
    getByID(id) {
      return this.users.find((user) => user.id === id);
    }
  
    deleteByID(id) {
      const index = this.users.findIndex((user) => user.id === id);
      if (index !== -1) {
        this.users.splice(index, 1);
      }
      return console.log('User dengan id $(id) berhasil dihapus');
    }
  }
  
  // 3. Instantiate UserRepositoryPostgres and add data
  const userRepository = new UserRepositoryPostgres();
  userRepository.add({ id: 3, name: 'John' });
  userRepository.add({ id: 4, name: 'Jane' });
  userRepository.add({ id: 1, name: 'agus' });
  
  // Get all users and print them
  const allUsers = userRepository.getAll();
  console.log(allUsers);
  console.log(userRepository.deleteByID(1));
  console.log(allUsers);