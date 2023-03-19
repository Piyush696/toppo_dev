<?php

class DInternaltab extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $dInternaltab_id;

    /**
     *
     * @var string
     */
    public $internaltab_id;

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
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("d-internaltab");
        $this->belongsTo('internaltab_id', 'Internaltab', 'internaltab_id', ['alias' => 'Internaltab']);
        $this->belongsTo('role_id', 'Role', 'role_id', ['alias' => 'Role']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'd-internaltab';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return DInternaltab[]|DInternaltab|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return DInternaltab|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
