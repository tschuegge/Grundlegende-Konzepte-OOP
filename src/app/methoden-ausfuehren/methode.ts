export enum Methode {
  autoBeschleunigen = "beschleunigen(gaspedalInProzent: number): number",
  autoVollgas = "vollgas(): number",
  motorBerechneGeschwindigkeit = "berechneGeschwindigkeit(gaspedalInProzent: number): number",
  radReifenAbnutzen = "reifenAbnutzen(gaspedalInProzent: number, leistungInKw: number): void"
}
