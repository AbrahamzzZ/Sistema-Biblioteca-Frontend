-- Script de creación de base de datos para Sistema de Biblioteca
-- Dialecto: T-SQL (SQL Server)

-- Crear Base de Datos si no existe
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'biblioteca_db')
BEGIN
    CREATE DATABASE biblioteca_db;
END
GO

USE biblioteca_db;
GO

-- =============================================
-- Tabla: Bibliotecarios (Administradores)
-- =============================================
IF OBJECT_ID('dbo.Bibliotecarios', 'U') IS NULL
BEGIN
    CREATE TABLE Bibliotecarios (
        id INT IDENTITY(1,1) PRIMARY KEY,
        nombre NVARCHAR(100) NOT NULL,
        email NVARCHAR(100) NOT NULL UNIQUE,
        password NVARCHAR(255) NOT NULL, -- Se recomienda guardar el hash
        estado BIT DEFAULT 1 -- 1: Activo, 0: Inactivo
    );

    -- Insertar bibliotecario por defecto
    INSERT INTO Bibliotecarios (nombre, email, password) VALUES 
    ('Admin Bibliotecario', 'admin@biblioteca.com', 'admin123');
END
GO

-- =============================================
-- Tabla: Usuarios (Lectores / Clientes)
-- =============================================
IF OBJECT_ID('dbo.Usuarios', 'U') IS NULL
BEGIN
    CREATE TABLE Usuarios (
        id INT IDENTITY(1,1) PRIMARY KEY,
        nombre_completo NVARCHAR(150) NOT NULL,
        cedula NVARCHAR(20) NOT NULL UNIQUE,
        correo_electronico NVARCHAR(100) NOT NULL UNIQUE,
        direccion NVARCHAR(255),
        telefono NVARCHAR(20),
        estado BIT DEFAULT 1
    );

    -- Insertar usuarios de prueba
    INSERT INTO Usuarios (nombre_completo, cedula, correo_electronico, direccion, telefono) VALUES 
    ('Juan Perez', '1234567890', 'juan.perez@email.com', 'Av. Central 123', '0991234567'),
    ('Maria Lopez', '0987654321', 'maria.lopez@email.com', 'Calle Secundaria 456', '0987654321');
END
GO

-- =============================================
-- Tabla: Libros
-- =============================================
IF OBJECT_ID('dbo.Libros', 'U') IS NULL
BEGIN
    CREATE TABLE Libros (
        id INT IDENTITY(1,1) PRIMARY KEY,
        codigo NVARCHAR(50) NOT NULL UNIQUE,
        titulo NVARCHAR(200) NOT NULL,
        autor NVARCHAR(100) NOT NULL,
        editorial NVARCHAR(100),
        anio_publicacion INT,
        genero NVARCHAR(50),
        stock INT DEFAULT 0,
        ubicacion NVARCHAR(100),
        estado BIT DEFAULT 1
    );

    -- Insertar libros de prueba
    INSERT INTO Libros (codigo, titulo, autor, editorial, anio_publicacion, genero, stock, ubicacion) VALUES 
    ('978-3-16-148410-0', 'El principito', 'Antoine de Saint-Exupéry', 'Editorial X', 1943, 'Fábula', 5, 'Estante A1'),
    ('978-0-7432-7356-5', 'El Gran Gatsby', 'F. Scott Fitzgerald', 'Scribner', 1925, 'Novela', 3, 'Estante B2'),
    ('ISO-9001', 'Clean Code', 'Robert C. Martin', 'Prentice Hall', 2008, 'Tecnología', 10, 'Estante T5');
END
GO

-- =============================================
-- Tabla: Prestamos
-- =============================================
IF OBJECT_ID('dbo.Prestamos', 'U') IS NULL
BEGIN
    CREATE TABLE Prestamos (
        id INT IDENTITY(1,1) PRIMARY KEY,
        usuario_id INT NOT NULL,
        libro_id INT NOT NULL,
        fecha_prestamo DATETIME, -- Coincide con 'fechaPrestamo' de la entidad Loan
        fecha_limite_devolucion DATETIME NOT NULL,
        fecha_real_devolucion DATETIME NULL,
        observacion NVARCHAR(MAX),
        estado BIT DEFAULT 1, -- 1: Prestado, 0: Devuelto
        CONSTRAINT FK_Prestamos_Usuarios FOREIGN KEY (usuario_id) REFERENCES Usuarios(id) ON DELETE CASCADE,
        CONSTRAINT FK_Prestamos_Libros FOREIGN KEY (libro_id) REFERENCES Libros(id) ON DELETE CASCADE
    );

    -- Insertar préstamo de prueba
    INSERT INTO Prestamos (usuario_id, libro_id, fecha_prestamo, fecha_limite_devolucion, observacion) VALUES 
    (1, 1, GETDATE(), DATEADD(DAY, 7, GETDATE()), 'Préstamo regular');
END
GO

SELECT * FROM Usuarios;