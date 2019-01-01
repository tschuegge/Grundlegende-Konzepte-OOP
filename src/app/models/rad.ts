import { InstanceBase } from './instance-base';
import { ReifenTyp } from './reifen-typ';

/**
 * Beschreibt ein Rad
 * für die Deklaration der Instanzvariablen wurde die ausführliche Schreibweise gewählt,
 * die Kurzschreibweise wurde bei der Klasse "Auto" verwendet
 */
export class Rad extends InstanceBase {

  /**
   * Zustand des Reifens in Prozent
   */
  public reifenZustandInProzent: number;

  /**
   * Typ des Reifens
   */
  public reifenTyp: ReifenTyp;

  /**
   * Konstruktor
   * @param name Name der Instanz (wird nur zu Darstellungszwecken benötigt)
   * @param reifenTyp Typ des Reifens
   */
  constructor(
    name: string,
    reifenTyp: ReifenTyp
  ) {
    super(name);
    this.reifenZustandInProzent = 100;
    this.reifenTyp = reifenTyp;
  }

  public reifenAbnutzen(gaspedalInProzent: number, leistungInKw: number): void {
    this.reifenZustandInProzent -= Math.floor(Math.pow(Math.log10(gaspedalInProzent * leistungInKw), 1.5));
    if (this.reifenZustandInProzent < 0) {
      this.reifenZustandInProzent = 0;
    }
  }
}
