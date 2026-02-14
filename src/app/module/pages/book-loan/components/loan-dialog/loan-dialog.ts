import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../../../../shared/components/card/card';
import { Button } from '../../../../../shared/components/button/button';
import { LoanDetail } from '../../../../../core/interfaces/loan/LoanDetail';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-loan-dialog',
  imports: [Card, Button, DatePipe],
  templateUrl: './loan-dialog.html',
  styleUrl: './loan-dialog.css',
})
export class LoanDialog {
  @Input() loan!: LoanDetail;
  @Output() close = new EventEmitter<void>();
}
