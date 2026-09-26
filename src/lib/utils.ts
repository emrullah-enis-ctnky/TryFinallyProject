import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind CSS sınıflarını güvenli bir şekilde birleştirmek ve
 * çakışan sınıfları çözmek için kullanılan genel yardımcı fonksiyon.
 * 
 * @example
 * cn("px-4 py-2", isPrimary && "bg-primary text-primary-foreground", className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
