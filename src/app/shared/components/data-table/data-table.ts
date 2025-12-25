import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../../ui/material-module';
import { Table } from '../../../core/interfaces/table';

@Component({
  selector: 'app-data-table',
  imports: [MaterialModule],
  templateUrl: './data-table.html',
  styleUrl: './data-table.css',
})
export class DataTable {
  @Input() columns: Table[] = [];
  @Input() data: any[] = [];
  @Input() showActions: boolean = true;

  @Output() view = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  displayedColumns(): string[] {
    return this.columns.map(col =>
      col.type === 'actions' ? 'actions' : col.key!
    );
  }
}
