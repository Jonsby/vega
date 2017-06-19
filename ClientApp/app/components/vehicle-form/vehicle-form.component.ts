import { FeatureService } from './../../services/feature.service';
import { MakeService } from './../../services/make.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css'],
  providers: [
    MakeService,
    FeatureService
  ]
})
export class VehicleFormComponent implements OnInit {

  makes: any[];
  models: any[];
  vehicle: any = {};

  features: any[];

  constructor(private _makeService: MakeService, private _featureService: FeatureService) { }

  ngOnInit() {
    this._makeService.getMakes().subscribe(makes => {
      this.makes = makes;
    });

    this._featureService.getFeatures().subscribe(features => this.features = features);
  }

  onMakeChange(){
    var selectedMake = this.makes.find(m => m.id == this.vehicle.make);
    this.models = selectedMake ? selectedMake.models : [];
  }

}
