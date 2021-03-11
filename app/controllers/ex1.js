import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  @tracked content = '';
  @tracked info;
  @tracked note;
  MAX = 100;

  get style() {
    if (this.size < 20) {
      return 'danger';
    } else if (this.size < 50) {
      return 'warning';
    }
    return 'info';
  }

  get size() {
    if (this.content) {
      return this.MAX - this.content.length;
    }
    return this.MAX;
  }

  @action clear() {
    this.content = '';
    this.note = '';
  }
  @action save() {
    this.note = 'Note enregistrée';
  }
  get update() {
    /*if (!this.content.equals('')) {
      return 'Note modifiée';
    }
    return null;*/
  }
}
