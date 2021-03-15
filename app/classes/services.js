import { mapBy } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class Services {
  services;
  promos;
  @tracked codePromo;

  constructor(datas) {
    this.services = datas;
  }

  get activeServices() {
    return this.services.filterBy('active', true);
  }

  get countActive() {
    return this.activeServices.length;
  }

  @mapBy('activeServices', 'price') prices;

  // @sum(prices) sumActive;

  get sumActive() {
    let result = 0;
    this.activeServices.forEach((s) => {
      if (s.active) {
        result += s.price;
      }
    });
    return result;
  }

  get promo() {
    if (this.codePromo && this.promo[this.codePromo]) {
      return this.promos[this.codePromo];
    }
    return 'Pas de promos';
  }
}
