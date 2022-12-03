
import {AppPage} from './app.po';

describe('Prueba bienvenida', () => {
  let page: AppPage;

  beforeEach(async ()=>{
    page=new AppPage();
  });

  it('texto malo titulo login', async () => {
    await page.navigateTo();
    expect(await page.getPageTitle()).toEqual('Soy un error');
  });

  it('texto boton', async () => {
    expect(await page.getPageLabel()).toEqual('INGRESAR');
  });

  it('texto no tienes cuenta', async () => {
    expect(await page.getPageNoCuenta()).toEqual('¿ No tienes cuenta?');
  });

  it('texto correo', async () => {
    expect(await page.getPageCorreo()).toEqual('no dice nah correo');
  });
  it('texto password', async () => {
    expect(await page.getPagePass()).toEqual('Password:');
  });


});
