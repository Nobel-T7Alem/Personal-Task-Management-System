import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class ErrorMiddleware implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    let statusCode = 500;
    let message = 'Internal Server Error';

    if (exception instanceof HttpException) {
      statusCode = exception.getStatus();
      message = exception.getResponse() as string;
    }

    response.status(statusCode).json({
      statusCode,
      message,
    });
  }
}