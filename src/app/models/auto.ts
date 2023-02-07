import { AutoClassBase } from './auto-class-base';
import { Motor } from './motor';
import { Rad } from './rad';

/**
 * Beschreibt ein Auto
 * für die Deklaration der Instanzvariablen wurde die Kurzschreibweise verwendet,
 * die ausführliche Schreibweise wurden bei den Klassen "Rad" und "Motor" verwendet
 */
export class Auto extends AutoClassBase {

  /**
   * Konstruktor
   */
  constructor(

    /**
     * Name der Instanz (wird nur zu Darstellungszwecken benötigt)
     */
    name: string,

    /**
     * Farbe des Autos
     */
    public farbe: string,

    /**
     * Marke des Autos
     */
    public marke: string,

    /**
     * Motor des Autos
     */
    public motor: Motor,

    /**
     * Das vordere linke Rad des Autos
     */
    public radVorneLinks: Rad,

    /**
     * Das vordere rechte Rad des Autos
     */
    public radVorneRechts: Rad,

    /**
     * Das hintere linke Rad des Autos
     */
    public radHintenLinks: Rad,

    /**
     * Das hintere rechte Rad des Autos
     */
    public radHintenRechts: Rad
  ) {
    super(name);
  }

  /**
   * Beschleunigt das Auto und gibt die Geschwindigkeit zurück
   * @param gaspedalInProzent Position des Gaspedals (in Prozent)
   */
  public beschleunigen(gaspedalInProzent: number): number {
    this.radVorneLinks.reifenAbnutzen(gaspedalInProzent, this.motor.leistungInKw);
    this.radVorneRechts.reifenAbnutzen(gaspedalInProzent, this.motor.leistungInKw);
    this.radHintenLinks.reifenAbnutzen(gaspedalInProzent, this.motor.leistungInKw);
    this.radHintenRechts.reifenAbnutzen(gaspedalInProzent, this.motor.leistungInKw);
    return this.motor.berechneGeschwindigkeit(gaspedalInProzent);
  }

  /**
   * Gibt Vollgas und gibt die Geschwindigkeit zurück
   */
  public vollgas(): number {
    return this.beschleunigen(100);
  }
}
