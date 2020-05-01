//Ленивый Прокси
//Вместо того, чтобы грузить данные сразу после старта программы,
//можно сэкономить ресурсы и создать объект тогда, когда он действительно понадобится.

//класс сервиса
 class ImageService{

  downloadImages() {
      for (let i=0; i<=10;i++) {
          console.log("image" + i + " was download");
      }
  }

  displayImages() {
      for (let i=0; i<=10;i++) {
          console.log("image" + i);
      }
  }

}

//класс прокси
 class ImageProxy {
     image;

    downloadImages() {
        this.lazyInit();
        return this.image.downloadImages();
    }

    displayImages() {
        this.lazyInit();
        return this.image.displayImages();
    }

     lazyInit() {
         if (this.image == null) {
             this.image = new ImageService();
         }
     };
}


p = new ImageProxy();
// выполнение операций
p.displayImages();
p.downloadImages();



