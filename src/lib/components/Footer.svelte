<script>
	export let route = null;
</script>

<footer>
  <p>
    Pon el código dentro del recuadro. <br /><br /> <br /> <br /> <br />
    ¿No funciona La cámara?<br />
    Escanea el código número {route} con la cámara de tu celular
  </p>
</footer>

<style>
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    padding: 20px;
    font-size: 0.8rem;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #eceaea;
  }
</style>
