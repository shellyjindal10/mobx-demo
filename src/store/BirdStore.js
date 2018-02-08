import {observable, action, computed} from 'mobx'

class BirdStore {
  @observable birds = []
  @action addBird = (bird) => {
    this.birds.push(bird)
  }
  @action clearBird = () => {
    this.birds = []
  }
  @computed get birdsCount(){
    return this.birds.length
  }
}

const store = new BirdStore()

export default store
