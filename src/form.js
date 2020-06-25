import React from 'react';
import classNames from 'classnames';

export const renderField = ({input, label, type, meta: {error}}) => {
   const classes = classNames(
      'form-control',
      {
         'is-invalid': error
      }
   );

   return(
      <div className="form-group">
         {label !== null && label !== '' && <label>{label}</label>}
         {type !== 'textarea' && <input {...input} type={type} className={classes}/>}
         {type === 'textarea' && <textarea {...input} className={classes}/>}
         {type === 'hidden' && <select {...input} className={classes}>
                                 <option value="/api/categories/14">Entrée</option>
                                 <option value="/api/categories/11">Plats</option>
                                 <option value="/api/categories/12">Desserts</option>
                              </select>}
         {type === 'drop-list' && <select {...input} className={classes}>
                                 <option value="/api/categories/14">Entrée</option>
                                 <option value="/api/categories/11">Plats</option>
                                 <option value="/api/categories/12">Desserts</option>
                              </select>}
         {error && <small className="form-text text-danger">{error}</small>}
      </div>
   );
};