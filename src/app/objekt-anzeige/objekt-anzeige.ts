import { ChangeDetectorRef, Component, Input, inject } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faQuestion, faCircle, faCogs, faCarSide } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Methode } from '../methoden-ausfuehren/methode';
import { Auto } from '../models/auto';
import { AutoClassBase } from '../models/auto-class-base';
import { Motor } from '../models/motor';
import { Rad } from '../models/rad';
import { MethodenAusfuehren } from '../methoden-ausfuehren/methoden-ausfuehren';
import { RefreshViewService } from '../refresh-view-service';

@Component({
  selector: 'app-objekt-anzeige',
  imports: [FontAwesomeModule],
  templateUrl: './objekt-anzeige.html',
})
export class ObjektAnzeige {
  private modalService = inject(NgbModal);
  private refreshView = inject(RefreshViewService);
  private cdRef = inject(ChangeDetectorRef);

  @Input() objekt: AutoClassBase = { name: '' };
  typ?: 'Rad' | 'Motor' | 'Auto';
  typMethoden = Array<Methode>();
  icon: IconDefinition = faQuestion;
  methoden = Methode;

  ngOnInit(): void {
    if (this.objekt instanceof Rad) {
      this.typ = 'Rad';
      this.icon = faCircle;
      this.typMethoden.push(Methode.radReifenAbnutzen);
    } else if (this.objekt instanceof Motor) {
      this.typ = 'Motor';
      this.icon = faCogs;
      this.typMethoden.push(Methode.motorBerechneGeschwindigkeit);
    } else if (this.objekt instanceof Auto) {
      this.typ = 'Auto';
      this.icon = faCarSide;
      this.typMethoden.push(Methode.autoBeschleunigen, Methode.autoVollgas);
    }

    this.refreshView.getObservable().subscribe(() => this.cdRef.markForCheck());
  }

  runMethode(methode: Methode) {
    const popupRef = this.modalService.open(MethodenAusfuehren, { size: 'lg' });
    popupRef.componentInstance.methode = methode;
    popupRef.componentInstance.objekt = this.objekt;
  }
}
