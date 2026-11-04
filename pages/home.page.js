class HomePage{

    //Mapeamento elementos

    constructor(page){
        this.page = page //plawrigth
        this.origem ='[name="fromPort"]'
        this.destino =  '[name="toPort"]'
        this.btnProcurar = '.btn-primary'
    }

    // Mapeamento ações
    async selecionar_viagem(origem, destino){
        await this.page.locator(this.origem).selectOption(origem)
        await this.page.locator(this.destino).selectOption(destino)
        await this.page.locator(this.btnProcurar).click()

    }

    //Assert - Validaçoes
    



}//fecha a classe p
