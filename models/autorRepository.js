const db = require('./db')

const AutorRepository = {

  getAll : async () => {
    const res = await db.query('SELECT * FROM autor');
    return res.rows;
  }, 

  getById : async (id) => {
    const sql = 'SELECT * FROM autor WHERE id = $1'
    const res = await db.query(sql, [id]);
    if(res.rows.length > 0){
      return res.rows[0];
    } else {
      return null;
    }
    
  }, 

  add : async (nome, nac) => {
    const sql = 'INSERT INTO autor (nome, nacionalidade) VALUES ($1, $2) RETURNING id, nome, nacionalidade';
    const values = [nome, nac];
    try {
      const res = await db.query(sql, values);
      return res.rows[0];
    } catch (error) {
      throw error;
    }
  },

  update : async (id, nome, nac) => {
    const sql = 'UPDATE autor SET nome = $1, nacionalidade = $2 WHERE id = $3 RETURNING *';
    const values = [nome, nac, id];
    const res = await db.query(sql, values);
    return res.rows[0];
  },

  delete : async (id) => {
    const sql = 'DELETE FROM autor WHERE id = $1';
    await pool.query(sql, [id]);
  }

}

module.exports = AutorRepository;