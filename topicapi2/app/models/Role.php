<?php
namespace App\Models;
class Role extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $role_id;

    /**
     *
     * @var string
     */
    public $name;

    /**
     *
     * @var string
     */
    public $description;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("role");
        $this->hasManyToMany('role_id', 'App\Models\DInternallink', 'role_id', 'internallink_id', 'App\Models\Internalink', ['alias' => 'DInternallink']);
        $this->hasMany('role_id', 'DInternaltab', 'role_id', ['alias' => 'DInternaltab']);
        $this->hasMany('role_id', 'RoleRoleparameter', 'role_id', ['alias' => 'RoleRoleparameter']);
        $this->hasMany('role_id', 'UserRoleTopic', 'role_id', ['alias' => 'UserRoleTopic']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'role';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Role[]|Role|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Role|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
