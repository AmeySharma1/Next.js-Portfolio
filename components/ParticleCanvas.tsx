'use client';

import { useEffect, useRef } from 'react';

class ParticleSystem {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private particles: any[];
  private mouse: { x: number | null; y: number | null };
  private count: number;

  constructor(canvasId: string) {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) return;
    
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d')!;
    this.particles = [];
    this.mouse = { x: null, y: null };
    this.count = 70;
    
    this.init();
    this.bindEvents();
    this.loop();
  }

  private init() {
    this.resize();
    for (let i = 0; i < this.count; i++) {
      this.particles.push(this.createParticle());
    }
  }

  private createParticle(x?: number, y?: number) {
    const colors = [
      'rgba(139,92,246,',   // violet
      'rgba(236,72,153,',   // pink
      'rgba(6,182,212,',    // cyan
      'rgba(255,255,255,',  // white
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return {
      x: x ?? Math.random() * this.canvas.width,
      y: y ?? Math.random() * this.canvas.height,
      radius: Math.random() * 2 + 0.5,
      color,
      alpha: Math.random() * 0.5 + 0.1,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      life: Math.random() * 200 + 100,
      age: 0,
    };
  }

  private resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private bindEvents() {
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
  }

  private draw(p: any) {
    const fadeFactor = Math.min(p.age / 20, 1) * Math.min((p.life - p.age) / 20, 1);
    this.ctx.beginPath();
    this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = `${p.color}${p.alpha * fadeFactor})`;
    this.ctx.fill();

    // Draw connection lines to nearby particles
    this.particles.forEach((q: any) => {
      if (p === q) return;
      const dx = p.x - q.x;
      const dy = p.y - q.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        this.ctx.beginPath();
        this.ctx.moveTo(p.x, p.y);
        this.ctx.lineTo(q.x, q.y);
        this.ctx.strokeStyle = `rgba(139,92,246,${0.05 * (1 - dist / 100)})`;
        this.ctx.lineWidth = 0.5;
        this.ctx.stroke();
      }
    });
  }

  private loop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles = this.particles.filter((p) => {
      p.age++;
      // Mouse attraction
      if (this.mouse.x && this.mouse.y) {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.vx += dx * 0.00015;
          p.vy += dy * 0.00015;
        }
      }
      p.vx *= 0.99;
      p.vy *= 0.99;
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < 0) p.x = this.canvas.width;
      if (p.x > this.canvas.width) p.x = 0;
      if (p.y < 0) p.y = this.canvas.height;
      if (p.y > this.canvas.height) p.y = 0;

      this.draw(p);
      return p.age < p.life;
    });

    // Replenish
    while (this.particles.length < this.count) {
      this.particles.push(this.createParticle());
    }

    requestAnimationFrame(() => this.loop());
  }
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      new ParticleSystem('particle-canvas');
    }
  }, []);

  return (
    <canvas 
      id="particle-canvas" 
      ref={canvasRef}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        pointerEvents: 'none', 
        zIndex: 1 
      }}
    />
  );
}
