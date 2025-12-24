import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../../ui/material-module';

@Component({
  selector: 'app-data-table',
  imports: [MaterialModule],
  templateUrl: './data-table.html',
  styleUrl: './data-table.css',
})
export class DataTable {
  @Input() columns: {
    key: string;
    label: string;
  }[] = []
  @Input() data: any[] = [];
  @Input() showActions: boolean = true;

  @Output() view = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  displayedColumns(): string[]{
    const cols = this.columns.map(c => c.key);
    return this.showActions ? [...cols, 'actions'] : cols;
  }
}
