<?php
namespace App\Models;
class DInternallink extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $dInternallink_id;

    /**
     *
     * @var string
     */
    public $internallink_id;

    /**
     *
     * @var string
     */
    public $role_id;

    /**
     *
     * @var string
     */
    public $isActive;

    /**
     *
     * @var string
     */
    public $programmernotes;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("d-internallink");
        $this->belongsTo('internallink_id', 'Internallink', 'internallink_id', ['alias' => 'Internallink']);
        $this->belongsTo('role_id', 'Role', 'role_id', ['alias' => 'Role']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'd-internallink';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return DInternallink[]|DInternallink|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return DInternallink|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
