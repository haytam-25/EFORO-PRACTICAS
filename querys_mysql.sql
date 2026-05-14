CREATE database soporte_telefonico;

use soporte_telefonico;

INSERT INTO usuarios (nombre, email, password, rol) VALUES
('María López',     'maria.lopez@empresa.com',     '1234', 'AGENTE'),
('Carlos Ramírez',  'carlos.ramirez@empresa.com',  '1234', 'AGENTE'),
('Ana Torres',      'ana.torres@empresa.com',       '1234', 'AGENTE'),
('Jorge Silva',     'jorge.silva@empresa.com',      '1234', 'AGENTE'),
('Lucía Fernández', 'lucia.fernandez@empresa.com',  '1234', 'AGENTE'),
('Admin',           'admin@empresa.com',            'admin123', 'ADMIN');