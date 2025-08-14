import { z } from 'zod';

// User Schema
export const UserSchema = z.object({
  _id: z.string(),
  name: z.string().min(2),
  email: z.string().email(),
  role: z.enum(['student', 'instructor', 'admin']),
  createdAt: z.date()
});

// Membership Schema
export const MembershipSchema = z.object({
  _id: z.string(),
  userId: z.string(),
  plan: z.enum(['basic', 'pro', 'vip']),
  status: z.enum(['active', 'expired', 'canceled']),
  startDate: z.date(),
  endDate: z.date()
});

// WorkoutPlan Schema
export const ExerciseSchema = z.object({
  name: z.string(),
  sets: z.number(),
  reps: z.number(),
  rest: z.number() // em segundos
});

export const WorkoutPlanSchema = z.object({
  _id: z.string(),
  userId: z.string(),
  title: z.string(),
  exercises: z.array(ExerciseSchema),
  updatedAt: z.date()
});

// ClassSchedule Schema
export const ClassScheduleSchema = z.object({
  _id: z.string(),
  title: z.string(),
  instructorId: z.string(),
  weekday: z.number().min(0).max(6),
  time: z.string(),
  capacity: z.number().positive(),
  enrolledCount: z.number().min(0)
});

// Payment Schema
export const PaymentSchema = z.object({
  _id: z.string(),
  userId: z.string(),
  amount: z.number().positive(),
  method: z.string(),
  status: z.enum(['pending', 'completed', 'failed']),
  paidAt: z.date().nullable()
});

// Export types
export type User = z.infer<typeof UserSchema>;
export type Membership = z.infer<typeof MembershipSchema>;
export type Exercise = z.infer<typeof ExerciseSchema>;
export type WorkoutPlan = z.infer<typeof WorkoutPlanSchema>;
export type ClassSchedule = z.infer<typeof ClassScheduleSchema>;
export type Payment = z.infer<typeof PaymentSchema>;
