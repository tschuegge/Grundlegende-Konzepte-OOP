import { AutoClassBase } from './auto-class-base';
import { Treibstoff } from './treibstoff';

/**
 * Beschreibt einen Motor
 * für die Deklaration der Instanzvariablen wurde die ausführliche Schreibweise gewählt,
 * die Kurzschreibweise wurde bei der Klasse "Auto" verwendet
 */
export class Motor extends AutoClassBase {

  /**
   * Leistung des Motors in Kilowatt
   */
  public leistungInKw: number;

  /**
   * Verwendeter Treibstoff
   */
  public treibstoff: Treibstoff;

  /**
   * Konstruktor
   * @param name Name der Instanz (wird nur zu Darstellungszwecken benötigt)
   * @param leistungInKw Leistung des Motors in Kilowatt
   * @param treibstoff Verwendeter Treibstoff
   */
  constructor(
    name: string,
    leistungInKw: number,
    treibstoff: Treibstoff
  ) {
    super(name);
    this.leistungInKw = leistungInKw;
    this.treibstoff = treibstoff;
  }

  /**
   * Berechnet die Geschwindigkeit
   * @param gaspedalInProzent Position des Gaspedals (in Prozent)
   */
  public berechneGeschwindigkeit(gaspedalInProzent: number): number {
    return Math.round(Math.pow(Math.log10(gaspedalInProzent * this.leistungInKw), 3.8));
  }
}
