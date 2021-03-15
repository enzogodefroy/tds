import Route from '@ember/routing/route';
import { datas, promos } from '../data/datas';
import Services from '../classes/services';
import { action, set } from '@ember/object';

export default class Ex2Route extends Route {
  model() {
    return new Services(datas, promos);
  }

  @action toggle(service) {
    set(service, 'active', !service.active);
  }
}
