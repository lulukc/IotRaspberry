class StatusController {
  statusDoRele = [
    { status: false, porta: 20 },
    { status: false, porta: 21 },
  ];

  acionarRele(numeroDoRele: number) {
    if (this.statusDoRele[numeroDoRele - 1].status) {
      this.statusDoRele[numeroDoRele - 1].status = false;
      console.log(`Luz apagada ${numeroDoRele}`);
    } else {
      this.statusDoRele[numeroDoRele - 1].status = true;
      console.log(`Luz acesa ${numeroDoRele}`);
    }
  }
}

export default new StatusController();
