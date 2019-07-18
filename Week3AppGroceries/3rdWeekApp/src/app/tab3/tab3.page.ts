import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  title = "Grocery List";
  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 1
    },
    {
      name: "Banana",
      quantity: 7
    },
    {
      name: "Sugar",
      quantity: 1
    }
  ]

  async removeItem(item, index) {
    console.log("Removing Item - ", item, index)
    
    const toast = await this.toastController.create({
      message: 'Removed Grocery Item - ' + item.name,
      duration: 2000
    });
    toast.present();
    this.items.splice(index, 1)
  }

  async addItem(){
    console.log("Adding Item")
    this.showAddItemPrompt()
  }

  async showAddItemPrompt() {
    const alert = await this.alertController.create({
      header: 'Add a Grocery Item',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Item'
        },
        {
          name: 'quantity',
          type: 'text',
          id: 'quantity-id',          
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: item => {
            console.log('Confirm Ok', item);
            this.items.push(item);
          }
        }
      ]
    });

    await alert.present();
  }

  constructor(public toastController: ToastController, public alertController: AlertController) { }

}
