import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

const getRandomColorClass = (): string => {
  const classes = [
    'text-slate-500',
    'text-slate-600',
    'text-slate-700',
    'text-slate-800',
    'text-slate-900',
    'text-gray-500',
    'text-gray-600',
    'text-gray-700',
    'text-gray-800',
    'text-gray-900',
    'text-zinc-500',
    'text-zinc-600',
    'text-zinc-700',
    'text-zinc-800',
    'text-zinc-900',
    'text-neutral-500',
    'text-neutral-600',
    'text-neutral-700',
    'text-neutral-800',
    'text-neutral-900',
    'text-stone-500',
    'text-stone-600',
    'text-stone-700',
    'text-stone-800',
    'text-stone-900',
    'text-red-500',
    'text-red-600',
    'text-red-700',
    'text-red-800',
    'text-red-900',
    'text-orange-500',
    'text-orange-600',
    'text-orange-700',
    'text-orange-800',
    'text-orange-900',
    'text-amber-500',
    'text-amber-600',
    'text-amber-700',
    'text-amber-800',
    'text-amber-900',
    'text-yellow-500',
    'text-yellow-600',
    'text-yellow-700',
    'text-yellow-800',
    'text-yellow-900',
    'text-lime-500',
    'text-lime-600',
    'text-lime-700',
    'text-lime-800',
    'text-lime-900',
    'text-green-500',
    'text-green-600',
    'text-green-700',
    'text-green-800',
    'text-green-900',
    'text-emerald-500',
    'text-emerald-600',
    'text-emerald-700',
    'text-emerald-800',
    'text-emerald-900',
    'text-teal-500',
    'text-teal-600',
    'text-teal-700',
    'text-teal-800',
    'text-teal-900',
    'text-cyan-500',
    'text-cyan-600',
    'text-cyan-700',
    'text-cyan-800',
    'text-cyan-900',
    'text-sky-500',
    'text-sky-600',
    'text-sky-700',
    'text-sky-800',
    'text-sky-900',
    'text-blue-500',
    'text-blue-600',
    'text-blue-700',
    'text-blue-800',
    'text-blue-900',
    'text-indigo-500',
    'text-indigo-600',
    'text-indigo-700',
    'text-indigo-800',
    'text-indigo-900',
    'text-violet-500',
    'text-violet-600',
    'text-violet-700',
    'text-violet-800',
    'text-violet-900',
    'text-purple-500',
    'text-purple-600',
    'text-purple-700',
    'text-purple-800',
    'text-purple-900',
    'text-fuchsia-500',
    'text-fuchsia-600',
    'text-fuchsia-700',
    'text-fuchsia-800',
    'text-fuchsia-900',
    'text-pink-500',
    'text-pink-600',
    'text-pink-700',
    'text-pink-800',
    'text-pink-900',
    'text-rose-500',
    'text-rose-600',
    'text-rose-700',
    'text-rose-800',
    'text-rose-900',
  ];
  const randomIndex = Math.floor(Math.random() * classes.length);
  return classes[randomIndex];
};
@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent implements OnInit {
  // outline=true;
  outline$ = new BehaviorSubject<boolean>(false);
  colorClass$ = new BehaviorSubject<string>('text-teal-500');

  ngOnInit(): void {
    const f = this.toggleOutline.bind(this);
    setInterval(f, 500);
  }

  toggleOutline() {
    this.outline$.next(!this.outline$.getValue());
    this.colorClass$.next(getRandomColorClass());
  }
}
