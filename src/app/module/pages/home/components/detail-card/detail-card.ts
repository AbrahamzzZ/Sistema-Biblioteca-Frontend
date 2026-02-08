import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../shared/ui/material-module';
import { Button } from '../../../../../shared/components/button/button';

@Component({
  selector: 'app-detail-card',
  imports: [MaterialModule, Button],
  templateUrl: './detail-card.html',
  styleUrl: './detail-card.css',
})
export class DetailCard {

}
