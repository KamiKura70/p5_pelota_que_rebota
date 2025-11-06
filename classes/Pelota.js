class Pelota {
    constructor(){
        
        this.diam = random(10, 50);
        this.rad = this.diam / 2;
    
        this.posx = random (this.rad, width - this.rad);
        this.posy = random (this.rad, height - this.rad);

        this.velx = random(-5 , 5);
        this.vely = random(-5 , 5);

        this.nuevoColor = color(random(255), random(255), random(255), 200);

        this.formaInterna = random(['cuadro', 'triangulo', 'circulo'])
        this.tamInterno = random(this.rad / 2, this.rad - 2);
        this.colorInterno = color(random(255), random(255), random(255), 220);

    }   
    
    actualizar(){
         if(this.posx > width - this.rad || this.posx < this.rad){
            this.velx *= -1;
        }

        if(this.posy > height - this.rad || this.posy < this.rad){
            this.vely *= -1;
        }

        this.posx += this.velx;
        this.posy += this.vely;

    }

    vizualizar(){
        fill(this.nuevoColor);
        stroke("#ffffffff");
        strokeWeight(4);
        circle( this.posx, this.posy, this.diam);

         noStroke();
        fill(this.colorInterno);
        let t = this.tamInterno;

        switch (this.formaInterna) {
            case 'cuadro':
                rectMode(CENTER);
                rect(this.posx, this.posy, t, t);
                break;
            case 'triangulo':
                triangle(
                    this.posx, this.posy - t/2,
                    this.posx - t/2, this.posy + t/2,
                    this.posx + t/2, this.posy + t/2
                );
                break;
            case 'circulo':
                ellipse(this.posx, this.posy, t);
                break;
        }

    }
}