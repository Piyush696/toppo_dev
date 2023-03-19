<?php

class RoleRoleparameter extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $role_roleparameter_id;

    /**
     *
     * @var string
     */
    public $role_id;

    /**
     *
     * @var string
     */
    public $roleparameter_id;

    /**
     *
     * @var string
     */
    public $value;

    /**
     *
     * @var string
     */
    public $valuetype;

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
        $this->setSource("role_roleparameter");
        $this->belongsTo('role_id', 'Role', 'role_id', ['alias' => 'Role']);
        $this->belongsTo('roleparameter_id', 'Roleparameter', 'roleparameter_id', ['alias' => 'Roleparameter']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'role_roleparameter';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return RoleRoleparameter[]|RoleRoleparameter|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return RoleRoleparameter|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
